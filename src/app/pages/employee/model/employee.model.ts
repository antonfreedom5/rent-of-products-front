import {PositionModel} from "../../position/model/position.model";

export interface EmployeeModel {
  id?: number;
  name?: string;
  phone?: string;
  address?: string;
  position?: PositionModel;
}
