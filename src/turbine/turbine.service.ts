import { Injectable, NotFoundException } from '@nestjs/common';
import { ignoreElements } from 'rxjs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { title } from 'process';
import {turbine} from './turbine.model';
@Injectable()
export class turbineService{
    constructor(@InjectModel('turbine') private readonly turbineModel: Model<turbine>) {}
    async getTurbineByName(materialName: string){
        const materials = await this.turbineModel.find().exec();
        const name = materials.filter(e => e.MaterialName === materialName);
        return materials.map(c => ({
            id: c.id,
            tier: c.ToolQuality, 
            miningSpeed: c.ToolSpeed,
            durability:100*c.ToolDurability,  
            effiencies: [(c.ToolQuality * 10 + 100 - 50)/100, (c.ToolQuality * 10 + 100 - 25)/100, (c.ToolQuality * 10 + 100)/100, (c.ToolQuality * 10 + 100 + 25)/100],
            flowRateSteam: [(50*c.ToolSpeed*1*20), (50*c.ToolSpeed*2*20, (50*c.ToolSpeed*2*20),(50*c.ToolSpeed*3*20),(50*c.ToolSpeed*4*20))],
        }))
    }
    async insertMaterial(AddGas:Boolean,AddPlasma:Boolean,AutoGenerateBlastFurnaceRecipes:Boolean,BlastFurnaceRequired:Boolean,BlastFurnaceTemp:number,ChemicalFormula:String,DensityDivider:number,DensityMultiplier:number,Density:number,DyeColor:String,EnchantmentLevel:number,Enchantment:String,FuelPower:number,FuelType:number,GasTemp:number,HasParentMod:Boolean,HeatDamage:number,ListMaterialByProducts:String,ListMaterialReRegistrations:String,ListSubTags:String,ListTCAspectAmounts:String,ListTCAspects:String,MatRGBA:String,MaterialArcSmeltInto:String,MaterialDirectSmeltInto:String,MaterialID:number,MaterialMacerateInto:String,MaterialName:String,MaterialSmeltInto:String,MaterialTypes:number,MeltingPoint:number,OreByProductMultiplier:number,OreMultiplier:number,OreSmeltingMultiplier:number,OreValue:number,ToolDurability:number, ToolQuality:number, ToolSpeed:number, Transparent:Boolean, Unificatable:Boolean){
        const material = new this.turbineModel({
            AddGas:AddGas,
            AddPlasma:AddPlasma,
            AutoGenerateBlastFurnaceRecipes:AutoGenerateBlastFurnaceRecipes,
            BlastFurnaceRequired:BlastFurnaceRequired,
            BlastFurnaceTemp:BlastFurnaceTemp,
            ChemicalFormula:ChemicalFormula,
            DensityDivider:DensityDivider,
            DensityMultiplier:DensityMultiplier,
            Density:Density,
            DyeColor:DyeColor,
            EnchantmentLevel:EnchantmentLevel,
            Enchantment:Enchantment,
            FuelPower:FuelPower,
            FuelType:FuelType,
            GasTemp:GasTemp,
            HasParentMod:HasParentMod,
            HeatDamage:HeatDamage,
            ListMaterialByProducts:ListMaterialByProducts,
            ListMaterialReRegistrations:ListMaterialReRegistrations,
            ListSubTags:ListSubTags,
            ListTCAspectAmounts:ListTCAspectAmounts,
            ListTCAspects:ListTCAspects,
            MatRGBA:MatRGBA,
            MaterialArcSmeltInto:MaterialArcSmeltInto,
            MaterialDirectSmeltInto:MaterialDirectSmeltInto,
            MaterialID:MaterialID,
            MaterialMacerateInto:MaterialMacerateInto,
            MaterialName:MaterialName,
            MaterialSmeltInto:MaterialSmeltInto,
            MaterialTypes:MaterialTypes,
            MeltingPoint:MeltingPoint,
            OreByProductMultiplier:OreByProductMultiplier,
            OreMultiplier:OreMultiplier,
            OreSmeltingMultiplier:OreSmeltingMultiplier,
            OreValue:OreValue,
            ToolDurability:ToolDurability,
            ToolQuality:ToolQuality,
            ToolSpeed:ToolSpeed,
            Transparent:Transparent,
            Unificatable:Unificatable})
        const result = await material.save();
        return result.id()
    }
    async updateMaterialById(materialId:string, AddGas:Boolean,AddPlasma:Boolean,AutoGenerateBlastFurnaceRecipes:Boolean,BlastFurnaceRequired:Boolean,BlastFurnaceTemp:number,ChemicalFormula:String,DensityDivider:number,DensityMultiplier:number,Density:number,DyeColor:String,EnchantmentLevel:number,Enchantment:String,FuelPower:number,FuelType:number,GasTemp:number,HasParentMod:Boolean,HeatDamage:number,ListMaterialByProducts:String,ListMaterialReRegistrations:String,ListSubTags:String,ListTCAspectAmounts:String,ListTCAspects:String,MatRGBA:String,MaterialArcSmeltInto:String,MaterialDirectSmeltInto:String,MaterialID:number,MaterialMacerateInto:String,MaterialName:String,MaterialSmeltInto:String,MaterialTypes:number,MeltingPoint:number,OreByProductMultiplier:number,OreMultiplier:number,OreSmeltingMultiplier:number,OreValue:number,ToolDurability:number, ToolQuality:number, ToolSpeed:number, Transparent:Boolean, Unificatable:Boolean){
        const updatedMaterial = await this.findMaterial(materialId);
        if (AddGas){
            updatedMaterial.AddGas=AddGas;
        }
        if (AddPlasma){
            updatedMaterial.AddPlasma=AddPlasma;
        }
        if (AutoGenerateBlastFurnaceRecipes){
            updatedMaterial.AutoGenerateBlastFurnaceRecipes=AutoGenerateBlastFurnaceRecipes;
        }
        if (BlastFurnaceRequired){
            updatedMaterial.BlastFurnaceRequired=BlastFurnaceRequired;
        }
        if (BlastFurnaceTemp){
            updatedMaterial.BlastFurnaceTemp=BlastFurnaceTemp;
        }
        if (ChemicalFormula){
            updatedMaterial.ChemicalFormula=ChemicalFormula;
        }
        if (DensityDivider){
            updatedMaterial.DensityDivider=DensityDivider;
        }
        if (DensityMultiplier){
            updatedMaterial.DensityMultiplier=DensityMultiplier;
        }
        if (Density){
            updatedMaterial.Density=Density;
        }
        if (DyeColor){
            updatedMaterial.DyeColor=DyeColor;
        }
        if (EnchantmentLevel){
            updatedMaterial.EnchantmentLevel=EnchantmentLevel;
        }
        if (Enchantment){
            updatedMaterial.Enchantment=Enchantment;
        }
        if (FuelPower){
            updatedMaterial.FuelPower=FuelPower;
        }
        if (FuelType){
            updatedMaterial.FuelType=FuelType;
        }
        if (GasTemp){
            updatedMaterial.GasTemp=GasTemp;
        }
        if (HasParentMod){
            updatedMaterial.HasParentMod=HasParentMod;
        }
        if (HeatDamage){
            updatedMaterial.HeatDamage=HeatDamage;
        }
        if (ListMaterialByProducts){
            updatedMaterial.ListMaterialByProducts=ListMaterialByProducts;
        }
        if (ListMaterialReRegistrations){
            updatedMaterial.ListMaterialReRegistrations=ListMaterialReRegistrations;
        }
        if (ListSubTags){
            updatedMaterial.ListSubTags=ListSubTags;
        }
        if (ListTCAspectAmounts){
            updatedMaterial.ListTCAspectAmounts=ListTCAspectAmounts;
        }
        if (ListTCAspects){
            updatedMaterial.ListTCAspects=ListTCAspects;
        }
        if (MatRGBA){
            updatedMaterial.MatRGBA=MatRGBA;
        }
        if (MaterialArcSmeltInto){
            updatedMaterial.MaterialArcSmeltInto=MaterialArcSmeltInto;
        }
        if (MaterialDirectSmeltInto){
            updatedMaterial.MaterialDirectSmeltInto=MaterialDirectSmeltInto;
        }
        if (MaterialID){
            updatedMaterial.MaterialID=MaterialID;
        }
        if (MaterialMacerateInto){
            updatedMaterial.MaterialMacerateInto=MaterialMacerateInto;
        }
        if (MaterialName){
            updatedMaterial.MaterialName=MaterialName;
        }
        if (MaterialSmeltInto){
            updatedMaterial.MaterialSmeltInto=MaterialSmeltInto;
        }
        if (MaterialTypes){
            updatedMaterial.MaterialTypes=MaterialTypes;
        }
        if (MeltingPoint){
            updatedMaterial.MeltingPoint=MeltingPoint;
        }
        if (OreByProductMultiplier){
            updatedMaterial.OreByProductMultiplier=OreByProductMultiplier;
        }
        if (OreMultiplier){
            updatedMaterial.OreMultiplier=OreMultiplier;
        }
        if (OreSmeltingMultiplier){
            updatedMaterial.OreSmeltingMultiplier=OreSmeltingMultiplier;
        }
        if (OreValue){
            updatedMaterial.OreValue=OreValue;
        }
        if (ToolDurability){
            updatedMaterial.ToolDurability=ToolDurability;
        }
        if (ToolQuality){
            updatedMaterial.ToolQuality=ToolQuality;
        }
        if (ToolSpeed){
            updatedMaterial.ToolSpeed=ToolSpeed;
        }
        if (Transparent){
            updatedMaterial.Transparent=Transparent;
        }
        if (Unificatable){
            updatedMaterial.Unificatable=Unificatable;
        }
    }   
    async findMaterial(id:string): Promise<turbine>{
        let turbine;
        try {
            turbine = await this.turbineModel.findById(id);
        } catch (error) {
            throw new NotFoundException("Material Not Found");
        }
        if (!turbine){
            throw new NotFoundException("Material Not Found");
        }
        return turbine;
    }
}