const ITEMS_PER_PAGE = 9;
export async function fetchUser(currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const res = await fetch(`http://localhost:8000/users`);
    if (!res.ok) {
      throw new Error("Failed to retrieve users from database");
    }
    const data = await res.json();
    return data.slice(offset, offset + ITEMS_PER_PAGE);
  } catch (err) {
    console.error("Database error: ", err);
    throw new Error("Failed to grab users");
  }
}

export async function fetchUserById(id: string) {
  try {
    const res = await fetch(`http://localhost:8000/users/${id}`);
    if (!res.ok) {
      throw new Error(`Could Not Retrieve User: ${res.status}`);
    }
    const item = await res.json();
    return item;
  } catch (error) {
    console.error("Error fetching item", error);
  }
}

export async function fetchPages() {
  try {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch total page count.");
  }
}
