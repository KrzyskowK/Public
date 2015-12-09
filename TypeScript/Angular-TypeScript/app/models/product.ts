namespace app.domain {

	export interface IProduct {
		productId: number;
		productName: string;
		productCode: string;
		releaseDate: Date;
		price: number;
		description: string;
		imageUrl: string;
		// CalculateDiscount(percent: number): number;
	}

	export class Product implements IProduct {

		constructor(public productId: number, public productName: string, public productCode: string,
			public releaseDate: Date, public price: number, public description: string, public imageUrl: string) {

		}

		public CalculateDiscount(percent: number): number {
			return this.price - (this.price * percent / 100);
		}
	}
}