import React, { Component } from 'react';
import MapInfo from '../components/map'
import VillagerList from '../components/villagers'
import Bookmark from '../components/bookmark'
import listVillagers from '../components/villagersapi'

// fetch("https://nookipedia.com/w/api.php?&origin=*&action=parse&format=json&page=List_of_villagers&section=2")
//     .then(response => {
//         console.log(response) 
//         return response.json() 
//     }) 
//     .then(data => { console.log(data)})

//     .catch(function(error) {
//         console.log('error')
//         // This is where you run code if the server returns any errors
//     });

// const vilTable = listVillagers(url)
// console.log("vilTable= " + vilTable)
// function tableToJson(table) {
//     var data = []; // first row needs to be headers var headers = [];
//     for (var i = 0; i < table.rows[0].cells.length; i++) {
//         headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
//     }
//     // go through cells
//     for (var i = 1; i < table.rows.length; i++) {
//         var tableRow = table.rows[i];
//         var rowData = {};
//         for (var j = 0; j < tableRow.cells.length; j++) {
//             rowData[headers[j]] = tableRow.cells[j].innerHTML;
//         }
//         data.push(rowData);
//     }
//     return data;
// }

export default function Home() {

    // console.log(JSON.stringify(tableToJson(vilTable)))

    return (

        <div id="notebook">
	        <div id="fullPage">
	            <div id="leftSide">
	            <MapInfo /> 
	            <Bookmark />
	            <VillagerList />
	            </div>
	            <div id="middle"> </div>
	            <div id="rightSide">
	                <div id="col-1">
	                 </div>
	                <div id="col-2"> </div>
	            </div>
	        </div>
    	</div>


    );
}