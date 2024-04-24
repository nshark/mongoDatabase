import { Body, Controller, Get,Post, Patch, Delete, Param  } from '@nestjs/common';
import { turbineService } from './turbine.service';

@Controller('turbine')
export class turbineController {
  constructor(private readonly turbineService: turbineService) {}
  
  @Post()
  async insertMaterial(
      @Body('AddGas') AddGas:boolean,
      @Body('AddPlasma')AddPlasma:Boolean,
      @Body('AutoGenerateBlastFurnaceRecipes')AutoGenerateBlastFurnaceRecipes:Boolean,
      @Body('BlastFurnaceRequired')BlastFurnaceRequired:Boolean,
      @Body('BlastFurnaceTemp')BlastFurnaceTemp:number,
      @Body('ChemicalFormula')ChemicalFormula:String,
      @Body('DensityDivider')DensityDivider:number,
      @Body('DensityMultiplier')DensityMultiplier:number,
      @Body('Density')Density:number,
      @Body('DyeColor')DyeColor:String,
      @Body('EnchantmentLevel')EnchantmentLevel:number,
      @Body('Enchantment')Enchantment:String,
      @Body('FuelPower')FuelPower:number,
      @Body('FuelType')FuelType:number,
      @Body('GasTemp')GasTemp:number,
      @Body('HasParentMod')HasParentMod:Boolean,
      @Body('HeatDamage')HeatDamage:number,
      @Body('ListMaterialByProducts')ListMaterialByProducts:String,
      @Body('ListMaterialReRegistrations')ListMaterialReRegistrations:String,
      @Body('ListSubTags')ListSubTags:String,
      @Body('ListTCAspectAmounts')ListTCAspectAmounts:String,
      @Body('ListTCAspects')ListTCAspects:String,
      @Body('MatRGBA')MatRGBA:String,
      @Body('MaterialArcSmeltInto')MaterialArcSmeltInto:String,
      @Body('MaterialDirectSmeltInto')MaterialDirectSmeltInto:String,
      @Body('MaterialID')MaterialID:number,
      @Body('MaterialMacerateInto')MaterialMacerateInto:String,
      @Body('MaterialName')MaterialName:String,
      @Body('MaterialSmeltInto')MaterialSmeltInto:String,
      @Body('MaterialTypes')MaterialTypes:number,
      @Body('MeltingPoint')MeltingPoint:number,
      @Body('OreByProductMultiplier')OreByProductMultiplier:number,
      @Body('OreMultiplier')OreMultiplier:number,
      @Body('OreSmeltingMultiplier')OreSmeltingMultiplier:number,
      @Body('OreValue')OreValue:number,
      @Body('ToolDurability')ToolDurability:number, 
      @Body('ToolQuality')ToolQuality:number, 
      @Body('ToolSpeed')ToolSpeed:number, 
      @Body('Transparent')Transparent:Boolean, 
      @Body('Unificatable')Unificatable:Boolean
    )
    {
      const generatedID = await this.turbineService.insertMaterial(AddGas,AddPlasma,AutoGenerateBlastFurnaceRecipes,BlastFurnaceRequired,BlastFurnaceTemp,ChemicalFormula,DensityDivider,DensityMultiplier,Density,DyeColor,EnchantmentLevel,Enchantment,FuelPower,FuelType,GasTemp,HasParentMod,HeatDamage,ListMaterialByProducts,ListMaterialReRegistrations,ListSubTags,ListTCAspectAmounts,ListTCAspects,MatRGBA,MaterialArcSmeltInto,MaterialDirectSmeltInto,MaterialID,MaterialMacerateInto,MaterialName,MaterialSmeltInto,MaterialTypes,MeltingPoint,OreByProductMultiplier,OreMultiplier,OreSmeltingMultiplier,OreValue,ToolDurability, ToolQuality, ToolSpeed, Transparent, Unificatable)
      return {id : generatedID}
    }
    @Get(':id')
    async getMaterialById(@Param('id') matID:string){
      const mat = await this.turbineService.findMaterial(matID)
      return mat
    }
  @Patch(':id')
  async updateMaterial(
      @Param('id') matID:string,
      @Body('AddGas') AddGas:boolean,
      @Body('AddPlasma')AddPlasma:Boolean,
      @Body('AutoGenerateBlastFurnaceRecipes')AutoGenerateBlastFurnaceRecipes:Boolean,
      @Body('BlastFurnaceRequired')BlastFurnaceRequired:Boolean,
      @Body('BlastFurnaceTemp')BlastFurnaceTemp:number,
      @Body('ChemicalFormula')ChemicalFormula:String,
      @Body('DensityDivider')DensityDivider:number,
      @Body('DensityMultiplier')DensityMultiplier:number,
      @Body('Density')Density:number,
      @Body('DyeColor')DyeColor:String,
      @Body('EnchantmentLevel')EnchantmentLevel:number,
      @Body('Enchantment')Enchantment:String,
      @Body('FuelPower')FuelPower:number,
      @Body('FuelType')FuelType:number,
      @Body('GasTemp')GasTemp:number,
      @Body('HasParentMod')HasParentMod:Boolean,
      @Body('HeatDamage')HeatDamage:number,
      @Body('ListMaterialByProducts')ListMaterialByProducts:String,
      @Body('ListMaterialReRegistrations')ListMaterialReRegistrations:String,
      @Body('ListSubTags')ListSubTags:String,
      @Body('ListTCAspectAmounts')ListTCAspectAmounts:String,
      @Body('ListTCAspects')ListTCAspects:String,
      @Body('MatRGBA')MatRGBA:String,
      @Body('MaterialArcSmeltInto')MaterialArcSmeltInto:String,
      @Body('MaterialDirectSmeltInto')MaterialDirectSmeltInto:String,
      @Body('MaterialID')MaterialID:number,
      @Body('MaterialMacerateInto')MaterialMacerateInto:String,
      @Body('MaterialName')MaterialName:String,
      @Body('MaterialSmeltInto')MaterialSmeltInto:String,
      @Body('MaterialTypes')MaterialTypes:number,
      @Body('MeltingPoint')MeltingPoint:number,
      @Body('OreByProductMultiplier')OreByProductMultiplier:number,
      @Body('OreMultiplier')OreMultiplier:number,
      @Body('OreSmeltingMultiplier')OreSmeltingMultiplier:number,
      @Body('OreValue')OreValue:number,
      @Body('ToolDurability')ToolDurability:number, 
      @Body('ToolQuality')ToolQuality:number, 
      @Body('ToolSpeed')ToolSpeed:number, 
      @Body('Transparent')Transparent:Boolean, 
      @Body('Unificatable')Unificatable:Boolean
    )
    {
      await this.turbineService.updateMaterialById(matID, AddGas,AddPlasma,AutoGenerateBlastFurnaceRecipes,BlastFurnaceRequired,BlastFurnaceTemp,ChemicalFormula,DensityDivider,DensityMultiplier,Density,DyeColor,EnchantmentLevel,Enchantment,FuelPower,FuelType,GasTemp,HasParentMod,HeatDamage,ListMaterialByProducts,ListMaterialReRegistrations,ListSubTags,ListTCAspectAmounts,ListTCAspects,MatRGBA,MaterialArcSmeltInto,MaterialDirectSmeltInto,MaterialID,MaterialMacerateInto,MaterialName,MaterialSmeltInto,MaterialTypes,MeltingPoint,OreByProductMultiplier,OreMultiplier,OreSmeltingMultiplier,OreValue,ToolDurability, ToolQuality, ToolSpeed, Transparent, Unificatable)
      return null
    }
    @Get('tur/:name')
    async getTurbine(@Param('name') materialName:string){
      return this.turbineService.getTurbineByName(materialName);
    }
    @Get()
    async getAllMaterials(){
      return this.turbineService.getAll();
    }
}
