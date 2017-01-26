# Instrument App step 1:

Project Goal:---------------------------------------------------------

Step by step Full Stack development of a web application that
includes a dynamic UI that facilitates searching 
a locally held database of instrument data --or a version of a database--
that a user can set parameters to filter by attribute(s)
,and then recieve back data pertaining to the filter parameters set by the user.

(e.g. All instruments in the Strings family, All instruments that read treble clef
, all instruments that sound at concert pitch.)

----------------------------------------------------------------------------



PROJECT NOTES :---------------------------------------------------------------


1/22
API built using Express and Node.js 
and using this tutorial: https://scotch.io/tutorials/

server.js includes mock database with individual instruments
and their data


Using the local path created via API
user can sort by instrument name,family,clef 
and get back all corresponding data.

1/26
-npm install nodemon --save

-tested index.html in broswer. Works

-shell doesn't show the same info by the directory nodemon
was demonstrated to me


--------------------------------------------------------




//Resources for instrument data:
<http://www.secretcomposer.com/Secret_Composer_Blog_Demo/Concert_Pitch_-_Instrument_Transposition_chart.htm>

