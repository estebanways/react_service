

class CategoryService extends RestAPI {
  constructor() {
    super();
    this.url = 'https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1'
  }

  async getCategories() {
    const path = `${this.url}/categories`;
    return this.get(path)
  }

  async updateCategory(id, payload) {
    const path = `${this.url}/categories/${id}`;
    return this.patch(path, payload);
  }
}

export default CategoryService;