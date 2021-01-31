import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as uuid from 'uuid';
@Entity()
export class Registration {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string = uuid.v4();

  @Column('varchar', { nullable: true, length: 50 })
  first_name;

  @Column('varchar', { nullable: true, length: 50 })
  last_name;

  @Column('varchar', { nullable: true, length: 50 })
  address1;

  @Column('varchar', { nullable: true, length: 50 })
  address2;

  @Column('varchar', { nullable: true, length: 50 })
  city;

  @Column('char', { nullable: true, length: 2 })
  state;

  @Column('char', { nullable: true, length: 9 })
  zip;

  @Column('varchar', { nullable: true, length: 50 })
  country;
}
