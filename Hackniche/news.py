import streamlit as st
import requests
import os
from dotenv import load_dotenv

# Load API key from environment variable
load_dotenv()
api_key = os.environ.get("api")

# Build the news API URL
url = f"https://newsapi.org/v2/everything?q=stock+market+(volatile OR crash OR surge)&from=2024-02-16&to=2024-02-16&sortBy=publishedAt&apiKey={api_key}"

# Fetch the news data
response = requests.get(url)

# Check for successful response
if response.status_code == 200:
    data = response.json()
    articles = data["articles"]

    # Sort articles by publishedAt in descending order (newest first)
    articles.sort(key=lambda article: article["publishedAt"], reverse=True)

    # Take the top 3 articles
    top_3_articles = articles[:3]

    st.title("Stock Market News")

    # Create three columns for the articles
    col1, col2, col3 = st.columns(3)
    image_dimensions = (200, 150)  # Adjust as needed

    # Display each article in its respective column
for i in range(3):  # Iterate through three articles
    with col1 if i == 0 else col2 if i == 1 else col3:
        # Display article image if available
        if top_3_articles[i]["urlToImage"]:
            img_response = requests.get(top_3_articles[i]["urlToImage"])
            if img_response.status_code == 200:
                st.image(img_response.content, width=image_dimensions[0])

        # Display headline as a clickable link within the same column
        st.markdown(f'<h6><a href="{top_3_articles[i]["url"]}" target="_blank">{top_3_articles[i]["title"]}</a></h6>', unsafe_allow_html=True)
      
            

#else:
   # st.error(f"Error fetching news: {response.status_code}")
