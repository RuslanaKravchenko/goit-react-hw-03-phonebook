import styled from 'styled-components';
const FilterFild = styled.div`
  margin-bottom: 20px;
  .filter_input {
    display: block;
    margin: 0 auto;
    padding: 5px 20px;
    height: 40px;
    width: 100%;
    max-width: 400px;
    border-radius: 10px;

    outline: none;
    &:focus,
    &:hover {
      border-color: #c97ddf;
      box-shadow: 5px 5px 8px -4px rgba(117, 52, 210, 0.33);
    }
  }
`;
export default FilterFild;
