// function to format date into readable text
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// filters members by organization_id
const filterMembers = (id, memberArray) => {
  let members = memberArray.filter(
    (member) => member.organization_id === `organization_id ${id}`
  );
  return members;
};

export { formatDate, filterMembers };
