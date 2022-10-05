import { FormWrapper } from './FormWrapper';

type UserData = {
  firstName: string;
  lastName: string;
  age: number;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="User Details">
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={e => updateFields({ firstName: e.target.value })}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        required
        type="text"
        value={lastName}
        onChange={e => updateFields({ lastName: e.target.value })}
      />
      <label htmlFor="age">Age</label>
      <input
        id="age"
        required
        type="number"
        value={age}
        min={1}
        max={200}
        onChange={e => updateFields({ age: Number(e.target.value) })}
      />
    </FormWrapper>
  );
}
