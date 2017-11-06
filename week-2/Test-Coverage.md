## What is a Test Coverage?

+ Amount of testing performed by a set of test cases is called Test Coverage.
Technique which determines whether our test cases are actually covering the application code and how much code is exercised when we run those test cases.

## Why is the Test coverage useful?

+ It can assure the quality of test
+ It can help identify what portions of the code were actually touched for the release or fix
+ It can help to determine the paths in your application that were not tested
+ Prevent Defect leakage
+ Time, scope and cost can be kept under control
+ Defect prevention at an early stage of project life cycle
+ It can determine all the decision points and paths used in the application, which allows you to increase test coverage
+ Gaps in requirements, test cases and defects at unit level and code level can be found in an easy way

## What are Istanbul and nyc?

+ Istanbul is a tool for computing JavaScript code coverage when running tests.
+ Code coverage is computed over the compiler output, not the original source code.
+ NYC is the istanbul command line interface **_(replacement for the old istanbul bin)_**

## How would you use them to improve your testing?

+ You run it alongside the npm test inside the project folder
+ To make it work you need to install it using the command:

`npm i nyc -D`

<img src="https://files.gitter.im/MarlenAw/VRz9/nyc.PNG" style="width: 700px;"/>
