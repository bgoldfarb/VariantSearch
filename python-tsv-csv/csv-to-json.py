import csv, json

csvFile = 'csv_data.csv'
jsonFile = 'newJson.json'
data = {}
with open(csvFile) as csvFile:
    csvReader = csv.DictReader(csvFile)
    for rows in csvReader:
        id = rows['Gene']
        data[id] = rows

with open(jsonFile, 'w') as jsonFile:
    jsonFile.write(json.dumps(data, indent=4))