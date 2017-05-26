# json-gen
Provides a simple command line interface for creating json objects.

#

##Has the following simple commands:


```
add <key> <value>
```
Adds a property using the given key/value pair

#

```
object
```
Prints out the currently generated object

#

```
path_set <arg>
```
Takes in a number of different arguments or, alternatively, the path to set directly.
The usable args are:
* `pwd` - Sets the path to the location of the json-gen script File

* `up` - Changes the path to be one layer up than it was previously (ie, `/foo/bar` to `/foo`)

* `concat` - Requires an additional argument after the first. Adds the additional argument as a directory on the end of the path (ie, `/foo` to `/foo/bar`)

#

```
path_get
```
Prints out the currently set path (with the set filename appended on the end!)

#

```
name <arg>
```
Sets the filename to the specified name. Don't forget the file extension!

#

```
output
```
Writes the generated object to the specified path
