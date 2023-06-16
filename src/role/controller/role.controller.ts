import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { RoleService } from '../service/role.service';
import { CreateRoleDto } from '../dto/create.role.dto';
import { Role } from '../shema/role.schema';
import { RemoveRoleDto } from '../dto/remove.role.dto';
import { UpdateRoleDto } from '../dto/update.role.dto';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post('create')
  create(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
    return this.roleService.create(createRoleDto);
  }

  @Put('update')
  update(@Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(updateRoleDto);
  }

  @Delete('delete')
  remove(@Body() removeRoleDto: RemoveRoleDto) {
    return this.roleService.remove(removeRoleDto);
  }

  @Get('all')
  findAll(): Promise<Role[]> {
    return this.roleService.findAll();
  }
}
