import requests

def get_weather(lat, lon, api_key):
    url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={api_key}"
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        main = data['weather'][0]['main']
        description = data['weather'][0]['description']
        temp = data['main']['temp']
        print(f"Weather: {main}")
        print(f"Description: {description}")
        print(f"Temperature: {temp}K")
    else:
        print("Error in the HTTP request")

if __name__ == "__main__":
    lat = input("Enter latitude: ")
    lon = input("Enter longitude: ")
    api_key = input("Enter your API key: ")
    get_weather(lat, lon, api_key)