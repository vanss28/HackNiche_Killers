import pandas as pd

# Load the CSV file
file_path = 'user_rebal.csv'  # Replace with the actual path to your CSV file
data = pd.read_csv(file_path)



total_investment_returns_by_user = data.groupby('User_Id').agg({
    'Investment_Amount': 'sum',
    'Instrument_Returns': 'sum'
}).reset_index()
total_investment_returns_by_user['New_Investment_Amount'] = total_investment_returns_by_user['Investment_Amount'] + total_investment_returns_by_user['Instrument_Returns']

# Example total new investment amount for demonstration (e.g., for a specific user)
new_total_investment_amount = total_investment_returns_by_user.iloc[0]['New_Investment_Amount']

# Calculate total returns by investment instrument
total_returns_by_instrument = data.groupby('Investment_Instrument')['Instrument_Returns'].sum()

# Map each instrument to its volatility and assign adjusted base weightages
instrument_volatility = data[['Investment_Instrument', 'Instrument_Volatility']].drop_duplicates().set_index('Investment_Instrument')['Instrument_Volatility']
base_weightages = {'Low': 0.4, 'Medium': 0.3, 'High': 0.3}
adjusted_base_weightages = instrument_volatility.map(base_weightages)
total_adjusted_base_weightage = adjusted_base_weightages.sum()

# Adjusted proportional weightages calculation
normalized_base_weightages = adjusted_base_weightages / total_adjusted_base_weightage
total_returns_sum = total_returns_by_instrument.sum()

adjusted_proportional_weightages = {}
for instrument, returns in total_returns_by_instrument.items():
    base_weightage = normalized_base_weightages[instrument]
    adjusted_weightage = base_weightage + (returns / total_returns_sum)
    adjusted_proportional_weightages[instrument] = adjusted_weightage

# Normalize the sum of adjusted weightages to 1 for allocation
total_weightage = sum(adjusted_proportional_weightages.values())
new_investment_allocation_adjusted = {instrument: weightage / total_weightage * new_total_investment_amount for instrument, weightage in adjusted_proportional_weightages.items()}

print(new_investment_allocation_adjusted)
'''
custom_list = [f"{key}:{value}" for key, value in new_investment_allocation_adjusted.items()]
print(custom_list)
'''