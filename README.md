## School - API - model

#### Used Node.JS, cloud.MongoDB, Mongoose.

**There are several endpoints:**

**Studenrs**

* POST _/students_ downloads json students data and save to MongoDB;
* GET _/students_ retrieve all students data in json from MongoDB;
* GET _/students/studentId_ retrieve one student data in json from MongoDB;
* PUT _/students/studentId_ update one student data in MongoDB;
* DELETE _/students/studentId_ delate one student data from MongoDB;

**Groups**

* POST _/groups_ downloads json groups data and save to MongoDB;
* GET _/groups_ retrieve all groups data in json from MongoDB;
* GET _/groups/groupId_ retrieve one group data in json from MongoDB;
* PUT _/groups/groupId_ update one group data in MongoDB;
* DELETE _/groups/groupId_ delate one group data from MongoDB;

**Teachers**

* POST _/teachers_ downloads json teachers data and save to MongoDB;
* GET _/teachers_ retrieve all teachers data in json from MongoDB;
* GET _/teachers/teacherId_ retrieve one teacher data in json from MongoDB;
* PUT _/teachers/teacherId_ update one teacher data in  MongoDB;
* DELETE _/teachers/teacherId_ delate one teachers data from MongoDB;

**Lections**

* POST _/lections_ downloads json lections data and save to MongoDB;
* GET _/lections_ retrieve all lections data in json from MongoDB;
* GET _/lections/lectionId_ retrieve one lection data in json from MongoDB;
* PUT _/lections/lectionId_ update one lection data in  MongoDB;
* DELETE _/lections/lectionId_ delate one lections data from MongoDB;

**Timetables**

* POST _/timetables_ downloads json timetables data and save to MongoDB;
* GET _/timetables_ retrieve all timetables data in json from MongoDB;
* PUT _/timetables/timetableId_ update one timetables data in MongoDB;
* DELETE _/timetables/timetableId_ delate one timetables data from MongoDB;

**My DB structure:**
![My DB structure:](/DB-structure.png)

_To run, you need the **config /.env** file_ 

_In .env you find **URL** and **Port**_

_Used **Basic Auth** with_ 

* _**Username: test**_
* _**Password:test**_