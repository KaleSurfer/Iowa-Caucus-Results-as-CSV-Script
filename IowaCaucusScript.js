var countiesList = document.querySelectorAll('.precinct-rows');
var header1 = document.querySelectorAll('.thead')[0].children;
var header2 = "";
var PRECINCT_ROW_DATA = "";

function copyToClipboard(text) 
{ 
    var tempTextArea = document.createElement("textarea");
    document.body.appendChild(tempTextArea);
    tempTextArea.value = text;
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
}

//Headers
for(var i = 0; i < header1.length; i++) 
{
  PRECINCT_ROW_DATA += header1[i].textContent + "\t";
}

//Precinct data
for(var i = 0; i < countiesList.length; i++) //Loop through Counties
{
    var a = countiesList[i];
    var precinctsInCounty = countiesList[i].children[1].children;
    for(var j = 0; j < precinctsInCounty.length; j++) //loop through Precincts in a given County
    {
         PRECINCT_ROW_DATA += a.firstChild.firstChild.textContent + "\t";
         PRECINCT_ROW_DATA += precinctsInCounty[j].firstChild.textContent;
         var rowData = precinctsInCounty[j];
         for(var k = 1; k < precinctsInCounty[j].children.length; k++) //Loop through precinct row data
         {
            PRECINCT_ROW_DATA += "\t" + precinctsInCounty[j].children[k].textContent;
         } 
         PRECINCT_ROW_DATA += "\n";
    }
}

//Copy it all into clipboard as a CSV
copyToClipboard(PRECINCT_ROW_DATA); 