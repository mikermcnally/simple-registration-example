import {
  IsIn,
  Length,
  Equals,
  IsPostalCode,
  IsString,
  IsOptional,
} from 'class-validator';
import { JSONSchema } from 'class-validator-jsonschema';

const states = [
  'AK',
  'AL',
  'AR',
  'AS',
  'AZ',
  'CA',
  'CO',
  'CT',
  'DC',
  'DE',
  'FL',
  'GA',
  'GU',
  'HI',
  'IA',
  'ID',
  'IL',
  'IN',
  'KS',
  'KY',
  'LA',
  'MA',
  'MD',
  'ME',
  'MI',
  'MN',
  'MO',
  'MS',
  'MT',
  'NC',
  'ND',
  'NE',
  'NH',
  'NJ',
  'NM',
  'NV',
  'NY',
  'OH',
  'OK',
  'OR',
  'PA',
  'PR',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VA',
  'VI',
  'VT',
  'WA',
  'WI',
  'WV',
  'WY',
];

export class CreateRegistrationDto {
  @IsString()
  @Length(1, 50)
  @JSONSchema({ title: 'First Name' })
  first_name: string;

  @IsString()
  @Length(1, 50)
  @JSONSchema({ title: 'Last Name' })
  last_name: string;

  @IsString()
  @Length(1, 50)
  @JSONSchema({ title: 'Address1' })
  address1: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @JSONSchema({ title: 'Address2' })
  address2: string;

  @IsString()
  @Length(1, 50)
  @JSONSchema({ title: 'City' })
  city: string;

  @IsIn(states)
  @JSONSchema({ title: 'State' })
  state: string;

  @IsPostalCode('US', { message: 'Must be a valid 5 or 9 digit zip code' })
  @JSONSchema({
    title: 'Zip',
    pattern: '(^d{5}$)|(^d{5}-d{4}$)',
  })
  zip: string;

  @Equals('US')
  @JSONSchema({ title: 'Country' })
  country = 'US';
}
