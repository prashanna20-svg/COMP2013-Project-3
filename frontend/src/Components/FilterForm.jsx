export default function FilterForm({ handleFilterPrices }) {
  return (
    <div>
      <h2>Filter Price</h2>
      <form>
        <input
          type="radio"
          name="priceFilter"
          id="all"
          value="all"
          onChange={handleFilterPrices}
          defaultChecked
        />
        <label htmlFor="all">Show All</label>
        <br />
        <input
          type="radio"
          name="priceFilter"
          id="1"
          value={1}
          onChange={handleFilterPrices}
        />
        <label htmlFor="1">{"< 1$"}</label>
        <br />
        <input
          type="radio"
          name="priceFilter"
          id="2"
          value={2}
          onChange={handleFilterPrices}
        />
        <label htmlFor="2">{"< 2$"}</label>
        <br />
        <input
          type="radio"
          name="priceFilter"
          id="4"
          value={4}
          onChange={handleFilterPrices}
        />
        <label htmlFor="4">{"< 4$"}</label>
        <br />
        <input
          type="radio"
          name="priceFilter"
          id="6"
          value={6}
          onChange={handleFilterPrices}
        />
        <label htmlFor="6">{"< 6$"}</label>
        <br />
        <input
          type="radio"
          name="priceFilter"
          id="9"
          value={9}
          onChange={handleFilterPrices}
        />
        <label htmlFor="9">{"< 9$"}</label>
      </form>
    </div>
  );
}
