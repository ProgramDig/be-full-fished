import { Injectable, NotFoundException } from '@nestjs/common';
import { Role } from '../shema/role.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRoleDto } from '../dto/create.role.dto';
import { RemoveRoleDto } from '../dto/remove.role.dto';
import { NotFoundError } from 'rxjs';
import { UpdateRoleDto } from '../dto/update.role.dto';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role.name) private roleModel: Model<Role>) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const createdRole = new this.roleModel(createRoleDto);
    return await createdRole.save();
  }

  async update(updateRoleDto: UpdateRoleDto) {
    const existingRole = this.roleModel.findByIdAndUpdate(
      updateRoleDto._id,
      { value: updateRoleDto.value },
      { new: true },
    );
    if (!existingRole) {
      throw new NotFoundException(`Роль # ${updateRoleDto} відсутня в базі.`);
    }
    return existingRole;
  }

  async remove(removeRoleDto: RemoveRoleDto) {
    const existingRole = this.roleModel.findByIdAndDelete(removeRoleDto);
    if (!existingRole) {
      throw new NotFoundException(`Роль # ${removeRoleDto} відсутня в базі.`);
    }
    return existingRole;
  }

  async findAll(): Promise<Role[]> {
    return this.roleModel.find().exec();
  }
}
