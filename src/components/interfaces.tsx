export interface iUrl {
	originalUrl: string;
	shortUrl: string;
	shortCode: string;
}
export interface userData{
	password: string,
	username: string
}

export interface iError {
	ok: boolean;
	error_code: number;
	error: string;
}