/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

   @Entity()
   export class User {
     @PrimaryGeneratedColumn('uuid')
     id: string;

     @Column()
     primaryEmailAddress: string;

     @Column()
     firstName: string;

     @Column({ nullable: true })
     middleName: string;

     @Column()
     lastName: string;

     @Column()
     passwordHash: string;

     @Column({ default: '' })
     backupEmailAddress: string;

     @Column({ default: false })
     isPrimaryEmailAddressVerified: boolean;

     @Column({ default: false })
     isBackupEmailAddressVerified: boolean;
   }
   