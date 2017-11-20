 # **Deploying**

##### What is PaaS

+ PaaS `(Platform as a service)` is category of cloud computing that *provides a platform and environment
to allow developers to build applications and services over the internet.*

+  PaaS services are hosted in the cloud and accessed by users
simply via their web browser.


##### ***Why is it useful to be able to deploy your code to a cloud platform?***
+ PaaS frees users from having to install in-house hardware and software to develop or run a new application

##### What services are there that can provide you with a platform for your code?

 + some of the main platforms:

  + [Heroku](https://heroku.com/)

  + [Amazon Web services](https://aws.amazon.com/)

  + [Microsoft Azure](https://azure.microsoft.com/)

  + [Google App Engine](https://cloud.google.com/appengine/)

##### Why mightemoticons some variables in your code need to change for different environments?

+ to avoid committing (exposing) our private keys, passwords or other sensitive details


##### What modules might you use to help manage environment variables?

+ ##### Dotenv

  Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
cross-env 🔀
Run scripts that set and use environment variables across platforms
