import { instance } from '@/api/api.interceptor'
import { ICategory } from '@/types/category.interface'
import { ServiceEnum } from '@/services/enums/service.enum'

export const CategoryService = {
	async getAll() {
		return instance<ICategory[]>({
			url: ServiceEnum.CATEGORY,
			method: 'GET'
		})
	},

	async getById(id: string | number) {
		return instance<ICategory>({
			url: `${ServiceEnum.CATEGORY}/${id}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return instance<ICategory>({
			url: `${ServiceEnum.CATEGORY}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async create() {
		return instance<ICategory>({
			url: ServiceEnum.CATEGORY,
			method: 'POST'
		})
	},

	async update(id: string | number, name: string) {
		return instance<ICategory>({
			url: `${ServiceEnum.CATEGORY}/${id}`,
			method: 'PUT',
			data: { name }
		})
	},

	async delete(id: string | number) {
		return instance<ICategory>({
			url: `${ServiceEnum.CATEGORY}/${id}`,
			method: 'DELETE'
		})
	}
}
