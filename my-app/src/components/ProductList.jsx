"use client";

import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    title: "",
    price: "",
    thumbnail: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/products");

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title,
          price: Number(form.price),
          thumbnail: form.thumbnail,
        }),
      });

      if (!res.ok) throw new Error("Failed to add");

      const newProduct = await res.json();

      setProducts((prev) => [...prev, newProduct]);

      setForm({ title: "", price: "", thumbnail: "" });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete");

      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <h3 className="text-center mt-5">Loading products...</h3>
    );
  }

  return (
    <div className="container py-4">

      <h2 className="text-center mb-4 fw-bold">
        Products 
      </h2>

      <form onSubmit={addProduct} className="card p-4 shadow mb-4">

        <input
          className="form-control mb-2"
          placeholder="Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <input
          className="form-control mb-2"
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />

        <input
          className="form-control mb-3"
          placeholder="Image URL"
          value={form.thumbnail}
          onChange={(e) =>
            setForm({ ...form, thumbnail: e.target.value })
          }
        />

        <button className="btn btn-primary w-100">
          Add Product
        </button>
      </form>

      <div className="row g-3">
        {products.map((p) => (
          <div className="col-md-4" key={p._id}>
            <div className="card h-100 shadow-sm border-0">

              {p.thumbnail && (
                <img
                  src={p.thumbnail}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                  alt={p.title}
                />
              )}

              <div className="card-body d-flex flex-column">
                <h5 className="fw-bold">{p.title}</h5>

                <p className="text-success fw-bold">
                  ${p.price}
                </p>

                <button
                  className="btn btn-outline-danger mt-auto"
                  onClick={() => deleteProduct(p._id)}
                >
                  Delete
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}