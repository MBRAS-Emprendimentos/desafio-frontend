import { Dispatch, SetStateAction } from "react";
import { PropertyData } from "../propertyData";

export default interface MainViewModelProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  propertyType: string;
  setPropertyType: Dispatch<SetStateAction<string>>;
  filteredProperties: Array<PropertyData>
}