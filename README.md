## For NExt js project just  use   --- 

npm i   ---
Npm Run Dev 
 Project 2

## 1 - Installing Libraries 

In the project directory, you can run:

### `npm install` 

if you faced any error or issue then try 

### `npm install --force` or `npm install --legacy-peer-deps`

 on success case you will see a new directory (node_modules).


## 2 - Start Scripts
In the project directory, you can run:

### `npm start` or press `Run and Debug` button while selecting Node environment in VScode. 

    For shortCut Key you can press `Ctrl+Shift+D` 

    You will see an message at DEBUG CONSOLE reguarding start server

    Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

----------------------------------------General Information------------------------------------------------

### About PORT
`const PORT = process.env.PORT || 8080`
Here your can replace `8080` with your desired PORT number 



### About Routes

 1 - `/crediantialssaver` : 
                        A POST Route which get all the necessary details of the Client. Save that data into DataBase and Send a Success Response to FrontEnd.


 2 - `/defaultData` : 
                        A GET Route which send all the clients details. All the Data Retrived from Database

### About Stripe Account 
As the Test Purpose Stripe Account is Used. If you want realtime integration You can REPLACE keys with yours, as mentioned below

const publicKey = `pk_test_51KDF8oCBbduDchXTO6o9IMRzTQNHX2JLeW8DMIv70nHVzf0dQ6WLRVaarhvWtks2OQXu7yJlvkEolaZKdgeSOPMY00flGhH640`;
const secretKey = `sk_test_51KDF8oCBbduDchXTYrqTFFQHleMb1EqjjTv30NKarVetWsVmmsCkJmFU4ujORW99QI97jVPbkuylQUbTw5inkSGy00qJHeWh6l`;

Keep your key secures to probihit from Fraud
