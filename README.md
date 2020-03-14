# MedicData2020

This is a test program for Government EMS and private Ambulance agencies to input Electronic Patient Care report data to into a central database via the web. In this test version Google auth is used to simulate domain specfic email addresses.


## Local Installation

clone this repo

create a postgres database and run it

a rails server must be running for the API backend

an NPM server must be running for the react-redux frontend

create two files in the src/components directory: AdminKey.js and GoogleAuth.js

create a google app with a developer account and assign its key to a const of Google_Auth_Key in the GoogleAuth.js file and export default Google_Auth_Key at the bottom.  

In the Adminkey.js file create a const of ADMIN_KEY and asign the specific Google id of an account you would like to have administrative rights to edit or delete any report. This will be changed in a future release. 

## Usage

Use the create trip report, edit or delete buttons to test functionality. 
![Imgur](https://imgur.com/C8VahOQ.png)
![Imgur](https://imgur.com/W22UwbI.png)

![Imgur](https://imgur.com/yG2LytJ.png)

## License
https://opensource.org/licenses/MIT

## Development

After checking out the repo, run bundle and npm install to install dependencies.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/Rpascar1/medicdata2020.
