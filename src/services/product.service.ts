import { instance } from '@/api/api.interceptor'
import { ServiceEnum } from '@/services/enums/service.enum'
import {
	FiltersDataType,
	ProductDataType
} from '@/services/interfaces/product.types'
import { IProduct, TypePaginationProducts } from '@/types/product.interface'

export const ProductService = {
	async getAll(queryData = {} as FiltersDataType) {
		const { data } = await instance<TypePaginationProducts>({
			url: ServiceEnum.PRODUCT,
			method: 'GET',
			params: queryData
		})

		return data
	},

	async getSimilar(productId: number | string) {
		return instance<IProduct[]>({
			url: `${ServiceEnum.PRODUCT}/similar/${productId}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return instance<IProduct>({
			url: `${ServiceEnum.PRODUCT}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async getById(id: number | string) {
		return instance<IProduct>({
			url: `${ServiceEnum.PRODUCT}/${id}`,
			method: 'GET'
		})
	},

	async getByCategory(categorySlug: string) {
		return instance<IProduct[]>({
			url: `${ServiceEnum.PRODUCT}/by-category/${categorySlug}`,
			method: 'GET'
		})
	},

	async create() {
		return instance<IProduct>({
			url: ServiceEnum.PRODUCT,
			method: 'POST'
		})
	},

	async update(id: string | number, data: ProductDataType) {
		return instance<IProduct>({
			url: `${ServiceEnum.PRODUCT}/${id}`,
			method: 'PUT',
			data
		})
	},

	async delete(id: string | number) {
		return instance<IProduct>({
			url: `${ServiceEnum.PRODUCT}/${id}`,
			method: 'DELETE'
		})
	}
}
