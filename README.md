``` bash
#You can see the deployed app here!
https://variants-search.herokuapp.com/

# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000

#To hit endpoint to get back all variants, go to 
https://variants-search.herokuapp.com/api/v1/variants

#To hit endpoint to get specific gene variant, go to, for example,
https://variants-search.herokuapp.com/api/v1/variants/CRYAB

#To hit endpoint with auto suggest feature go to,
https://variants-search.herokuapp.com/api/v1/CRY/suggest/

#To run server tests go to server level,
npm t

#To run client test, cd into client 
npm t

#I wrote two python scripts to convert tsv to JSON, this is found in the python-tsv-csv Folder

```

## App Info

### Author

Brian Goldfarb