The following sections outline the back-end team's coding standards. The following rules will be followed by the back end team in the development of the PlanMe backend.

<h1>Language:</h1> Javascript ES6

<h1>Recommended Editor:</h1> Visual Studio Code
There are no hard restrictions on editor used, but use of IDEs should be confirmed with the rest of the team to ensure commits are clean of special IDE files; only necessary code should be committed.
Within the back end team, use of the Github Web Client editor is strictly prohibited.

<h1>Commits:</h1>
Commits should be sparse and use descriptive names. Large sums of unnecessary, small commits, and commits with similar/same names should be avoided.

<h1>Variables:</h1>
<b>Declaration:</b>
Variables should be declared using the let keyword. This was decided because of the let keyword's differences to var. 
The var keyword declares a variable either globally, or to the scope of the entire function. The let keyword however allows us to declar variables locally to any block of code. This specificity was deemed more safe by the team, and will be used throughout the entirety of the PlanMe backend with no exceptions.

<b>Naming:</b>
All packages, functions, and variables are to be named using the camel case naming format i.e. likeThis.
The only exception will be global constant data variables, which will be named in all capitals with underscores i.e. LIKE_THIS. 
All variables should have descriptive names with limited verbosity. To determine the balance between descriptiveness and verbosity is left to the programmer.
Use of the same variable name in separate modules should be avoided. This rule does not apply to variables which hold packages; the names of these variables should be standardized throughout each module for consistency.

<b>Packages:</b>
Packages should be declared as constants. The exceptions for package variable naming are stated above.

<h1>Objects:</h1>
<b>Naming:</b>
All objects will be declared in PascalCase with no exceptions. At declaration, the objects will be name using the format *ObjectName*Class (where *ObjectName* is replaced with the object's intended name).
The exports will be declared in PascakCase with no exceptions. They will be named using the format *ObjectName* i.e. removing the word "Class" from the object's original name. This is because the export name is the name being used throughout the file, and as such the least verbose name is exported.
Object member naming follows the same standards as variable naming, stated above.

<b>Methods:</b>
An object's methods should only have responsibilities associated with the instance of the object. While the differentiation does not exist in Javascript ES6, all methods of an object should be treated as an instance method. Any methods that would be defined as static in other languages should simply be declared outside of the object in the module, and exported independently of the object.
There will be no "getter" or "setter" methods in any of the objects on the PlanMe backend. The inclusion of these methods is superfluous in Javascript, as there is no concept of encapsulation present in the language. All members will simply be accessed directly on the instance i.e. this.*member*. Note that these methods will be included in the class diagram found in the Design document. These are included to coincide with the nature of the assignment, and not to reflect proper implementation. Further details on the disparities between documentation and implementation will be specified in the Implementation Guide document.

<h1>Module Code Order:</h1>
Code should be written in each module in the following order:
<ul>
<li>"use strict"; declaration; for strict mode</li>
<li>Require npm packages</li>
<li>Require app modules</li>
<li>Declare global constants</li>
<li>Define object if present in module; never more than one object per module</li>
<li>Define methods</li>
<li>Define operation code (i.e. the "main program") if necessary in module</li>
<li>Define exports</li>
</ul>
No exceptions with any module.

