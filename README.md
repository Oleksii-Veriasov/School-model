## School - API - model<h2> tag
Used Node.JS, cloud.MongoDB, Mongoose.

There are several endpoints:
**Studenrs**
*POST /students downloads json students data and save to MongoDB;
*GET /students retrieve all students data in json from MongoDB;
*GET /students/studentId retrieve one student data in json from MongoDB;
*PUT /students/studentId update one student data in MongoDB;
*DELETE /students/studentId delate one student data from MongoDB;
**Groups**
*POST /groups downloads json groups data and save to MongoDB;
*GET /groups retrieve all groups data in json from MongoDB;
*GET /groups/groupId retrieve one group data in json from MongoDB;
*PUT /groups/groupId update one group data in MongoDB;
*DELETE /groups/groupId delate one group data from MongoDB;
**Teachers**
*POST /teachers downloads json teachers data and save to MongoDB;
*GET /teachers retrieve all teachers data in json from MongoDB;
*GET /teachers/teacherId retrieve one teacher data in json from MongoDB;
*PUT /teachers/teacherId update one teacher data in  MongoDB;
*DELETE /teachers/teacherId delate one teachers data from MongoDB;
**Lections**
*POST /lections downloads json lections data and save to MongoDB;
*GET /lections retrieve all lections data in json from MongoDB;
*GET /lections/lectionId retrieve one lection data in json from MongoDB;
*PUT /lections/lectionId update one lection data in  MongoDB;
*DELETE /lections/lectionId delate one lections data from MongoDB;
**Timetables**
*POST /timetables downloads json timetables data and save to MongoDB;
*GET /timetables retrieve all timetables data in json from MongoDB;
*PUT /timetables/timetableId update one timetables data in MongoDB;
*DELETE /timetables/timetableId delate one timetables data from MongoDB;

My DB structure:
![My DB structure:](/DB-structure.png)