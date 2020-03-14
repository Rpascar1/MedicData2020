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

![Imgur](https://imgur.com/yG2LytJ.png)


run this command in the command line if error says you need or do not have permission to execute:

chmod a+x ./bin/coral_getter

This will make the file executable.

Use this app to see in stock sps coral as well as anything under $100

![Imgur](https://imgur.com/C8VahOQ.png)
![Imgur](https://i.imgur.com/OzOD5pM.png)


## License
https://opensource.org/licenses/MIT

## Development



After checking out the repo, run `bin/setup` to install dependencies. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/Rpascar1/coral_getter.
