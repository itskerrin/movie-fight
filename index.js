const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '55d16f76',
      s: searchTerm,
    },
  });
  console.log(response.data);
}; // making requests instead of fetch

const input = document.querySelector('input');

const onInput = (event) => {
  fetchData(event.target.value);
};
input.addEventListener('input', debounce(onInput, 500));
