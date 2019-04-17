Homework 4
Nikhita Kokkirala

**IDE used**: RemixIDE

**Solidity Pragma**: ^0.5.0

**Link for RemixIDE**: https://remix.ethereum.org/#optimize=false&version=soljson-v0.5.1+commit.c8a2cb62.js

Create a new file and Courses.sol. Or clone/zip my repository. Then in RemixIDE, click on the folder icon and select the Courses.sol from the copy of my repo. 

*My file is compatible solidity 0.5.0*


**Steps to Compile, Deploy, and Run Functions**: 
1) Under the Compile tab, click on the dropdown list saying **select new compiler version**. Select the following compiler version. 
	
					0.5.0+commit.1d4f565a
2) Go to the Run tab. For the environment, please select **JavaScript VM**. Once you select this, you will see default addresses generated. **Copy this address, it will be used later** There is no need to change the gas limit and Value. 
3) Make sure the courses file is selected and then click deploy. 
4) You will now see your deployed contract. Click on the dropdown arrow and you will see the functions of the contract. Let's go through each function and see how they work. 
5) **setInstructor** --> the function to create a new instructor. As parameters, it takes in an address, an integer for age, and two strings for first and last name. *Remember the address you copied? You will paste in the set instructor as the address parameter.* An example can be as follows: 

		"0xca35b7d915458ef540ade6068dfe2f44e8fa733c", 23, "Harry", "Potter"

6) **getInstructors**--> Returns the address of the instructor you just set. Copy that address. Click on getInstructors. Example output is as follows: 
	
    	0: address[]: 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c


7) **getInstructor** -->Returns the name and age of the instructor. Paste the address returned from getInstructors. **Note: Addresses need to be within double quotes"**. Example input: 

		"0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c"
 
Click on getInstructor. Example output: 
		
                        0: uint256: 23
                        1: string: Harry
                        2: string: Potter
                        
8) **countInstructor**--> returns number of instructors for a particular address. Click on countInstructor. Example output: 

		0: uint256: 1
9) Now let's try another exercise. Let's add another instructor. Choose another account address and deploy. Do the same steps for the functions as described above. You can see the functions work the same way and are unique to the address. 



