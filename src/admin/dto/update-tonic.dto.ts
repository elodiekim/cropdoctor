import { IsNotEmpty } from "class-validator";


export class UpdateTonicDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  tonic_img: string;
}