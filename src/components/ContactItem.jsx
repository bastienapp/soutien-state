function ContactItem(props) {
  const { firstName, lastName, age, job } = props;

  return (
    <div>
      <h1>
        {firstName} {lastName}
      </h1>
      <p>{age}</p>
      <p>{job}</p>
    </div>
  );
}
export default ContactItem;
