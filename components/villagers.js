import React, { Component } from "react";
import Villager from "./villager"
import VillagerListApi from "./villagersapi"

class VillagerList extends Component {
	render() {
	
		return (
			<div className="villagerContainer">
				<div className="villagerHeaderContainer">
					<h1 id="villagerHeader"> Current Villagers </h1>
					<button id="editVillagers"> Edit Villagers </button>
				</div>

				<div id="villagers">
				<VillagerListApi />
				</div>
			</div>
		);
	}
}

export default VillagerList;