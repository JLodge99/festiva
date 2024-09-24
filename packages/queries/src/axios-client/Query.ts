//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.20.0.0 (NJsonSchema v11.0.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming
import type {
	QueryClient,
	QueryFunctionContext,
	QueryKey,
	UseQueryOptions,
	UseQueryResult,
} from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosRequestConfig } from 'axios';
import { useContext } from 'react';
import { QueryMetaContext } from 'react-query-swagger';
import * as Types from '../axios-client';
import { Client as ClientClass } from '../axios-client';
import {
	addMetaToOptions,
	getBaseUrl,
	getClientFactory,
	isParameterObject,
	trimArrayEnd,
} from './helpers';

export const Client = () => getClientFactory()(ClientClass);

export type CountryCountryInfoQueryParameters = {
	countryCode: string;
};

export type LongWeekendLongWeekendQueryParameters = {
	year: number;
	countryCode: string;
	availableBridgeDays: number | undefined;
	subdivisonCode: string | undefined;
};

export type PublicHolidayPublicHolidaysV3QueryParameters = {
	year: number;
	countryCode: string;
};

export type PublicHolidayIsTodayPublicHolidayQueryParameters = {
	countryCode: string;
	countyCode: string | undefined;
	offset: number | undefined;
};

export type PublicHolidayNextPublicHolidaysQueryParameters = {
	countryCode: string;
};

export function countryCountryInfoUrl(countryCode: string): string {
	let url_ = getBaseUrl() + '/api/v3/CountryInfo/{countryCode}';
	if (countryCode === undefined || countryCode === null)
		throw new Error("The parameter 'countryCode' must be defined.");
	url_ = url_.replace('{countryCode}', encodeURIComponent('' + countryCode));
	url_ = url_.replace(/[?&]$/, '');
	return url_;
}

let countryCountryInfoDefaultOptions: Omit<
	UseQueryOptions<Types.CountryInfoDto, unknown, Types.CountryInfoDto>,
	'queryKey' | 'queryFn'
> &
	Partial<
		Pick<
			UseQueryOptions<
				Types.CountryInfoDto,
				unknown,
				Types.CountryInfoDto
			>,
			'queryFn'
		>
	> = {};
export function getCountryCountryInfoDefaultOptions() {
	return countryCountryInfoDefaultOptions;
}
export function setCountryCountryInfoDefaultOptions(
	options: typeof countryCountryInfoDefaultOptions,
) {
	countryCountryInfoDefaultOptions = options;
}

export function countryCountryInfoQueryKey(countryCode: string): QueryKey;
export function countryCountryInfoQueryKey(...params: any[]): QueryKey {
	if (params.length === 1 && isParameterObject(params[0])) {
		const { countryCode } = params[0] as CountryCountryInfoQueryParameters;

		return trimArrayEnd([
			'Client',
			'countryCountryInfo',
			countryCode as any,
		]);
	} else {
		return trimArrayEnd(['Client', 'countryCountryInfo', ...params]);
	}
}
export function __countryCountryInfo(
	context: QueryFunctionContext,
	axiosConfig?: AxiosRequestConfig | undefined,
) {
	return Client().countryCountryInfo(context.queryKey[2] as string);
}

export function useCountryCountryInfoQuery<
	TSelectData = Types.CountryInfoDto,
	TError = unknown,
>(
	dto: CountryCountryInfoQueryParameters,
	options?: Omit<
		UseQueryOptions<Types.CountryInfoDto, TError, TSelectData>,
		'queryKey'
	>,
	axiosConfig?: Partial<AxiosRequestConfig>,
): UseQueryResult<TSelectData, TError>;
/**
 * Get country info for the given country
 * @return OK
 */
export function useCountryCountryInfoQuery<
	TSelectData = Types.CountryInfoDto,
	TError = unknown,
>(
	countryCode: string,
	options?: Omit<
		UseQueryOptions<Types.CountryInfoDto, TError, TSelectData>,
		'queryKey'
	>,
	axiosConfig?: Partial<AxiosRequestConfig>,
): UseQueryResult<TSelectData, TError>;
export function useCountryCountryInfoQuery<
	TSelectData = Types.CountryInfoDto,
	TError = unknown,
>(...params: any[]): UseQueryResult<TSelectData, TError> {
	let options:
		| UseQueryOptions<Types.CountryInfoDto, TError, TSelectData>
		| undefined = undefined;
	let axiosConfig: AxiosRequestConfig | undefined = undefined;
	let countryCode: any = undefined;

	if (params.length > 0) {
		if (isParameterObject(params[0])) {
			({ countryCode } = params[0] as CountryCountryInfoQueryParameters);
			options = params[1];
			axiosConfig = params[2];
		} else {
			[countryCode, options, axiosConfig] = params;
		}
	}

	const metaContext = useContext(QueryMetaContext);
	options = addMetaToOptions(options, metaContext);

	return useQuery<Types.CountryInfoDto, TError, TSelectData>({
		queryFn: axiosConfig
			? (context) => __countryCountryInfo(context, axiosConfig)
			: __countryCountryInfo,
		queryKey: countryCountryInfoQueryKey(countryCode),
		...(countryCountryInfoDefaultOptions as unknown as Omit<
			UseQueryOptions<Types.CountryInfoDto, TError, TSelectData>,
			'queryKey'
		>),
		...options,
	});
}
/**
 * Get country info for the given country
 * @return OK
 */
export function setCountryCountryInfoData(
	queryClient: QueryClient,
	updater: (data: Types.CountryInfoDto | undefined) => Types.CountryInfoDto,
	countryCode: string,
) {
	queryClient.setQueryData(countryCountryInfoQueryKey(countryCode), updater);
}

/**
 * Get country info for the given country
 * @return OK
 */
export function setCountryCountryInfoDataByQueryId(
	queryClient: QueryClient,
	queryKey: QueryKey,
	updater: (data: Types.CountryInfoDto | undefined) => Types.CountryInfoDto,
) {
	queryClient.setQueryData(queryKey, updater);
}

export function countryAvailableCountriesUrl(): string {
	let url_ = getBaseUrl() + '/api/v3/AvailableCountries';
	url_ = url_.replace(/[?&]$/, '');
	return url_;
}

let countryAvailableCountriesDefaultOptions: Omit<
	UseQueryOptions<Types.CountryV3Dto[], unknown, Types.CountryV3Dto[]>,
	'queryKey' | 'queryFn'
> &
	Partial<
		Pick<
			UseQueryOptions<
				Types.CountryV3Dto[],
				unknown,
				Types.CountryV3Dto[]
			>,
			'queryFn'
		>
	> = {};
export function getCountryAvailableCountriesDefaultOptions() {
	return countryAvailableCountriesDefaultOptions;
}
export function setCountryAvailableCountriesDefaultOptions(
	options: typeof countryAvailableCountriesDefaultOptions,
) {
	countryAvailableCountriesDefaultOptions = options;
}

export function countryAvailableCountriesQueryKey(): QueryKey;
export function countryAvailableCountriesQueryKey(...params: any[]): QueryKey {
	return trimArrayEnd(['Client', 'countryAvailableCountries']);
}
export function __countryAvailableCountries(
	context: QueryFunctionContext,
	axiosConfig?: AxiosRequestConfig | undefined,
) {
	return Client().countryAvailableCountries();
}

/**
 * Get all available countries
 * @return OK
 */
export function useCountryAvailableCountriesQuery<
	TSelectData = Types.CountryV3Dto[],
	TError = unknown,
>(
	options?: Omit<
		UseQueryOptions<Types.CountryV3Dto[], TError, TSelectData>,
		'queryKey'
	>,
	axiosConfig?: Partial<AxiosRequestConfig>,
): UseQueryResult<TSelectData, TError>;
export function useCountryAvailableCountriesQuery<
	TSelectData = Types.CountryV3Dto[],
	TError = unknown,
>(...params: any[]): UseQueryResult<TSelectData, TError> {
	let options:
		| UseQueryOptions<Types.CountryV3Dto[], TError, TSelectData>
		| undefined = undefined;
	let axiosConfig: AxiosRequestConfig | undefined = undefined;

	options = params[0] as any;
	axiosConfig = params[1] as any;

	const metaContext = useContext(QueryMetaContext);
	options = addMetaToOptions(options, metaContext);

	return useQuery<Types.CountryV3Dto[], TError, TSelectData>({
		queryFn: axiosConfig
			? (context) => __countryAvailableCountries(context, axiosConfig)
			: __countryAvailableCountries,
		queryKey: countryAvailableCountriesQueryKey(),
		...(countryAvailableCountriesDefaultOptions as unknown as Omit<
			UseQueryOptions<Types.CountryV3Dto[], TError, TSelectData>,
			'queryKey'
		>),
		...options,
	});
}
/**
 * Get all available countries
 * @return OK
 */
export function setCountryAvailableCountriesData(
	queryClient: QueryClient,
	updater: (data: Types.CountryV3Dto[] | undefined) => Types.CountryV3Dto[],
) {
	queryClient.setQueryData(countryAvailableCountriesQueryKey(), updater);
}

/**
 * Get all available countries
 * @return OK
 */
export function setCountryAvailableCountriesDataByQueryId(
	queryClient: QueryClient,
	queryKey: QueryKey,
	updater: (data: Types.CountryV3Dto[] | undefined) => Types.CountryV3Dto[],
) {
	queryClient.setQueryData(queryKey, updater);
}

export function longWeekendLongWeekendUrl(
	year: number,
	countryCode: string,
	availableBridgeDays: number | undefined,
	subdivisonCode: string | undefined,
): string {
	let url_ = getBaseUrl() + '/api/v3/LongWeekend/{year}/{countryCode}?';
	if (year === undefined || year === null)
		throw new Error("The parameter 'year' must be defined.");
	url_ = url_.replace('{year}', encodeURIComponent('' + year));
	if (countryCode === undefined || countryCode === null)
		throw new Error("The parameter 'countryCode' must be defined.");
	url_ = url_.replace('{countryCode}', encodeURIComponent('' + countryCode));
	if (availableBridgeDays === null)
		throw new Error("The parameter 'availableBridgeDays' cannot be null.");
	else if (availableBridgeDays !== undefined)
		url_ +=
			'availableBridgeDays=' +
			encodeURIComponent('' + availableBridgeDays) +
			'&';
	if (subdivisonCode === null)
		throw new Error("The parameter 'subdivisonCode' cannot be null.");
	else if (subdivisonCode !== undefined)
		url_ +=
			'subdivisonCode=' + encodeURIComponent('' + subdivisonCode) + '&';
	url_ = url_.replace(/[?&]$/, '');
	return url_;
}

let longWeekendLongWeekendDefaultOptions: Omit<
	UseQueryOptions<
		Types.LongWeekendV3Dto[],
		unknown,
		Types.LongWeekendV3Dto[]
	>,
	'queryKey' | 'queryFn'
> &
	Partial<
		Pick<
			UseQueryOptions<
				Types.LongWeekendV3Dto[],
				unknown,
				Types.LongWeekendV3Dto[]
			>,
			'queryFn'
		>
	> = {};
export function getLongWeekendLongWeekendDefaultOptions() {
	return longWeekendLongWeekendDefaultOptions;
}
export function setLongWeekendLongWeekendDefaultOptions(
	options: typeof longWeekendLongWeekendDefaultOptions,
) {
	longWeekendLongWeekendDefaultOptions = options;
}

export function longWeekendLongWeekendQueryKey(
	dto: LongWeekendLongWeekendQueryParameters,
): QueryKey;
export function longWeekendLongWeekendQueryKey(
	year: number,
	countryCode: string,
	availableBridgeDays: number | undefined,
	subdivisonCode: string | undefined,
): QueryKey;
export function longWeekendLongWeekendQueryKey(...params: any[]): QueryKey {
	if (params.length === 1 && isParameterObject(params[0])) {
		const { year, countryCode, availableBridgeDays, subdivisonCode } =
			params[0] as LongWeekendLongWeekendQueryParameters;

		return trimArrayEnd([
			'Client',
			'longWeekendLongWeekend',
			year as any,
			countryCode as any,
			availableBridgeDays as any,
			subdivisonCode as any,
		]);
	} else {
		return trimArrayEnd(['Client', 'longWeekendLongWeekend', ...params]);
	}
}
export function __longWeekendLongWeekend(
	context: QueryFunctionContext,
	axiosConfig?: AxiosRequestConfig | undefined,
) {
	return Client().longWeekendLongWeekend(
		context.queryKey[2] as number,
		context.queryKey[3] as string,
		context.queryKey[4] as number | undefined,
		context.queryKey[5] as string | undefined,
	);
}

export function useLongWeekendLongWeekendQuery<
	TSelectData = Types.LongWeekendV3Dto[],
	TError = unknown,
>(
	dto: LongWeekendLongWeekendQueryParameters,
	options?: Omit<
		UseQueryOptions<Types.LongWeekendV3Dto[], TError, TSelectData>,
		'queryKey'
	>,
	axiosConfig?: Partial<AxiosRequestConfig>,
): UseQueryResult<TSelectData, TError>;
/**
 * Get long weekends for a given country
 * @param availableBridgeDays (optional)
 * @param subdivisonCode (optional)
 * @return OK
 */
export function useLongWeekendLongWeekendQuery<
	TSelectData = Types.LongWeekendV3Dto[],
	TError = unknown,
>(
	year: number,
	countryCode: string,
	availableBridgeDays: number | undefined,
	subdivisonCode: string | undefined,
	options?: Omit<
		UseQueryOptions<Types.LongWeekendV3Dto[], TError, TSelectData>,
		'queryKey'
	>,
	axiosConfig?: Partial<AxiosRequestConfig>,
): UseQueryResult<TSelectData, TError>;
export function useLongWeekendLongWeekendQuery<
	TSelectData = Types.LongWeekendV3Dto[],
	TError = unknown,
>(...params: any[]): UseQueryResult<TSelectData, TError> {
	let options:
		| UseQueryOptions<Types.LongWeekendV3Dto[], TError, TSelectData>
		| undefined = undefined;
	let axiosConfig: AxiosRequestConfig | undefined = undefined;
	let year: any = undefined;
	let countryCode: any = undefined;
	let availableBridgeDays: any = undefined;
	let subdivisonCode: any = undefined;

	if (params.length > 0) {
		if (isParameterObject(params[0])) {
			({ year, countryCode, availableBridgeDays, subdivisonCode } =
				params[0] as LongWeekendLongWeekendQueryParameters);
			options = params[1];
			axiosConfig = params[2];
		} else {
			[
				year,
				countryCode,
				availableBridgeDays,
				subdivisonCode,
				options,
				axiosConfig,
			] = params;
		}
	}

	const metaContext = useContext(QueryMetaContext);
	options = addMetaToOptions(options, metaContext);

	return useQuery<Types.LongWeekendV3Dto[], TError, TSelectData>({
		queryFn: axiosConfig
			? (context) => __longWeekendLongWeekend(context, axiosConfig)
			: __longWeekendLongWeekend,
		queryKey: longWeekendLongWeekendQueryKey(
			year,
			countryCode,
			availableBridgeDays,
			subdivisonCode,
		),
		...(longWeekendLongWeekendDefaultOptions as unknown as Omit<
			UseQueryOptions<Types.LongWeekendV3Dto[], TError, TSelectData>,
			'queryKey'
		>),
		...options,
	});
}
/**
 * Get long weekends for a given country
 * @param availableBridgeDays (optional)
 * @param subdivisonCode (optional)
 * @return OK
 */
export function setLongWeekendLongWeekendData(
	queryClient: QueryClient,
	updater: (
		data: Types.LongWeekendV3Dto[] | undefined,
	) => Types.LongWeekendV3Dto[],
	year: number,
	countryCode: string,
	availableBridgeDays: number | undefined,
	subdivisonCode: string | undefined,
) {
	queryClient.setQueryData(
		longWeekendLongWeekendQueryKey(
			year,
			countryCode,
			availableBridgeDays,
			subdivisonCode,
		),
		updater,
	);
}

/**
 * Get long weekends for a given country
 * @param availableBridgeDays (optional)
 * @param subdivisonCode (optional)
 * @return OK
 */
export function setLongWeekendLongWeekendDataByQueryId(
	queryClient: QueryClient,
	queryKey: QueryKey,
	updater: (
		data: Types.LongWeekendV3Dto[] | undefined,
	) => Types.LongWeekendV3Dto[],
) {
	queryClient.setQueryData(queryKey, updater);
}

export function publicHolidayPublicHolidaysV3Url(
	year: number,
	countryCode: string,
): string {
	let url_ = getBaseUrl() + '/api/v3/PublicHolidays/{year}/{countryCode}';
	if (year === undefined || year === null)
		throw new Error("The parameter 'year' must be defined.");
	url_ = url_.replace('{year}', encodeURIComponent('' + year));
	if (countryCode === undefined || countryCode === null)
		throw new Error("The parameter 'countryCode' must be defined.");
	url_ = url_.replace('{countryCode}', encodeURIComponent('' + countryCode));
	url_ = url_.replace(/[?&]$/, '');
	return url_;
}

let publicHolidayPublicHolidaysV3DefaultOptions: Omit<
	UseQueryOptions<
		Types.PublicHolidayV3Dto[],
		unknown,
		Types.PublicHolidayV3Dto[]
	>,
	'queryKey' | 'queryFn'
> &
	Partial<
		Pick<
			UseQueryOptions<
				Types.PublicHolidayV3Dto[],
				unknown,
				Types.PublicHolidayV3Dto[]
			>,
			'queryFn'
		>
	> = {};
export function getPublicHolidayPublicHolidaysV3DefaultOptions() {
	return publicHolidayPublicHolidaysV3DefaultOptions;
}
export function setPublicHolidayPublicHolidaysV3DefaultOptions(
	options: typeof publicHolidayPublicHolidaysV3DefaultOptions,
) {
	publicHolidayPublicHolidaysV3DefaultOptions = options;
}

export function publicHolidayPublicHolidaysV3QueryKey(
	dto: PublicHolidayPublicHolidaysV3QueryParameters,
): QueryKey;
export function publicHolidayPublicHolidaysV3QueryKey(
	year: number,
	countryCode: string,
): QueryKey;
export function publicHolidayPublicHolidaysV3QueryKey(
	...params: any[]
): QueryKey {
	if (params.length === 1 && isParameterObject(params[0])) {
		const { year, countryCode } =
			params[0] as PublicHolidayPublicHolidaysV3QueryParameters;

		return trimArrayEnd([
			'Client',
			'publicHolidayPublicHolidaysV3',
			year as any,
			countryCode as any,
		]);
	} else {
		return trimArrayEnd([
			'Client',
			'publicHolidayPublicHolidaysV3',
			...params,
		]);
	}
}
export function __publicHolidayPublicHolidaysV3(
	context: QueryFunctionContext,
	axiosConfig?: AxiosRequestConfig | undefined,
) {
	return Client().publicHolidayPublicHolidaysV3(
		context.queryKey[2] as number,
		context.queryKey[3] as string,
	);
}

export function usePublicHolidayPublicHolidaysV3Query<
	TSelectData = Types.PublicHolidayV3Dto[],
	TError = unknown,
>(
	dto: PublicHolidayPublicHolidaysV3QueryParameters,
	options?: Omit<
		UseQueryOptions<Types.PublicHolidayV3Dto[], TError, TSelectData>,
		'queryKey'
	>,
	axiosConfig?: Partial<AxiosRequestConfig>,
): UseQueryResult<TSelectData, TError>;
/**
 * Get public holidays
 * @return Public holidays
 */
export function usePublicHolidayPublicHolidaysV3Query<
	TSelectData = Types.PublicHolidayV3Dto[],
	TError = unknown,
>(
	year: number,
	countryCode: string,
	options?: Omit<
		UseQueryOptions<Types.PublicHolidayV3Dto[], TError, TSelectData>,
		'queryKey'
	>,
	axiosConfig?: Partial<AxiosRequestConfig>,
): UseQueryResult<TSelectData, TError>;
export function usePublicHolidayPublicHolidaysV3Query<
	TSelectData = Types.PublicHolidayV3Dto[],
	TError = unknown,
>(...params: any[]): UseQueryResult<TSelectData, TError> {
	let options:
		| UseQueryOptions<Types.PublicHolidayV3Dto[], TError, TSelectData>
		| undefined = undefined;
	let axiosConfig: AxiosRequestConfig | undefined = undefined;
	let year: any = undefined;
	let countryCode: any = undefined;

	if (params.length > 0) {
		if (isParameterObject(params[0])) {
			({ year, countryCode } =
				params[0] as PublicHolidayPublicHolidaysV3QueryParameters);
			options = params[1];
			axiosConfig = params[2];
		} else {
			[year, countryCode, options, axiosConfig] = params;
		}
	}

	const metaContext = useContext(QueryMetaContext);
	options = addMetaToOptions(options, metaContext);

	return useQuery<Types.PublicHolidayV3Dto[], TError, TSelectData>({
		queryFn: axiosConfig
			? (context) => __publicHolidayPublicHolidaysV3(context, axiosConfig)
			: __publicHolidayPublicHolidaysV3,
		queryKey: publicHolidayPublicHolidaysV3QueryKey(year, countryCode),
		...(publicHolidayPublicHolidaysV3DefaultOptions as unknown as Omit<
			UseQueryOptions<Types.PublicHolidayV3Dto[], TError, TSelectData>,
			'queryKey'
		>),
		...options,
	});
}
/**
 * Get public holidays
 * @return Public holidays
 */
export function setPublicHolidayPublicHolidaysV3Data(
	queryClient: QueryClient,
	updater: (
		data: Types.PublicHolidayV3Dto[] | undefined,
	) => Types.PublicHolidayV3Dto[],
	year: number,
	countryCode: string,
) {
	queryClient.setQueryData(
		publicHolidayPublicHolidaysV3QueryKey(year, countryCode),
		updater,
	);
}

/**
 * Get public holidays
 * @return Public holidays
 */
export function setPublicHolidayPublicHolidaysV3DataByQueryId(
	queryClient: QueryClient,
	queryKey: QueryKey,
	updater: (
		data: Types.PublicHolidayV3Dto[] | undefined,
	) => Types.PublicHolidayV3Dto[],
) {
	queryClient.setQueryData(queryKey, updater);
}

export function publicHolidayIsTodayPublicHolidayUrl(
	countryCode: string,
	countyCode: string | undefined,
	offset: number | undefined,
): string {
	let url_ = getBaseUrl() + '/api/v3/IsTodayPublicHoliday/{countryCode}?';
	if (countryCode === undefined || countryCode === null)
		throw new Error("The parameter 'countryCode' must be defined.");
	url_ = url_.replace('{countryCode}', encodeURIComponent('' + countryCode));
	if (countyCode === null)
		throw new Error("The parameter 'countyCode' cannot be null.");
	else if (countyCode !== undefined)
		url_ += 'countyCode=' + encodeURIComponent('' + countyCode) + '&';
	if (offset === null)
		throw new Error("The parameter 'offset' cannot be null.");
	else if (offset !== undefined)
		url_ += 'offset=' + encodeURIComponent('' + offset) + '&';
	url_ = url_.replace(/[?&]$/, '');
	return url_;
}

let publicHolidayIsTodayPublicHolidayDefaultOptions: Omit<
	UseQueryOptions<void, unknown, void>,
	'queryKey' | 'queryFn'
> &
	Partial<Pick<UseQueryOptions<void, unknown, void>, 'queryFn'>> = {};
export function getPublicHolidayIsTodayPublicHolidayDefaultOptions() {
	return publicHolidayIsTodayPublicHolidayDefaultOptions;
}
export function setPublicHolidayIsTodayPublicHolidayDefaultOptions(
	options: typeof publicHolidayIsTodayPublicHolidayDefaultOptions,
) {
	publicHolidayIsTodayPublicHolidayDefaultOptions = options;
}

export function publicHolidayIsTodayPublicHolidayQueryKey(
	dto: PublicHolidayIsTodayPublicHolidayQueryParameters,
): QueryKey;
export function publicHolidayIsTodayPublicHolidayQueryKey(
	countryCode: string,
	countyCode: string | undefined,
	offset: number | undefined,
): QueryKey;
export function publicHolidayIsTodayPublicHolidayQueryKey(
	...params: any[]
): QueryKey {
	if (params.length === 1 && isParameterObject(params[0])) {
		const { countryCode, countyCode, offset } =
			params[0] as PublicHolidayIsTodayPublicHolidayQueryParameters;

		return trimArrayEnd([
			'Client',
			'publicHolidayIsTodayPublicHoliday',
			countryCode as any,
			countyCode as any,
			offset as any,
		]);
	} else {
		return trimArrayEnd([
			'Client',
			'publicHolidayIsTodayPublicHoliday',
			...params,
		]);
	}
}
export function __publicHolidayIsTodayPublicHoliday(
	context: QueryFunctionContext,
	axiosConfig?: AxiosRequestConfig | undefined,
) {
	return Client().publicHolidayIsTodayPublicHoliday(
		context.queryKey[2] as string,
		context.queryKey[3] as string | undefined,
		context.queryKey[4] as number | undefined,
	);
}

export function usePublicHolidayIsTodayPublicHolidayQuery<
	TSelectData = void,
	TError = unknown,
>(
	dto: PublicHolidayIsTodayPublicHolidayQueryParameters,
	options?: Omit<UseQueryOptions<void, TError, TSelectData>, 'queryKey'>,
	axiosConfig?: Partial<AxiosRequestConfig>,
): UseQueryResult<TSelectData, TError>;
/**
 * Is today a public holiday
 * @param countryCode The Country Code
 * @param countyCode (optional) Federal State Code
 * @param offset (optional) utc timezone offset
 * @return Today is a public holiday
 */
export function usePublicHolidayIsTodayPublicHolidayQuery<
	TSelectData = void,
	TError = unknown,
>(
	countryCode: string,
	countyCode: string | undefined,
	offset: number | undefined,
	options?: Omit<UseQueryOptions<void, TError, TSelectData>, 'queryKey'>,
	axiosConfig?: Partial<AxiosRequestConfig>,
): UseQueryResult<TSelectData, TError>;
export function usePublicHolidayIsTodayPublicHolidayQuery<
	TSelectData = void,
	TError = unknown,
>(...params: any[]): UseQueryResult<TSelectData, TError> {
	let options: UseQueryOptions<void, TError, TSelectData> | undefined =
		undefined;
	let axiosConfig: AxiosRequestConfig | undefined = undefined;
	let countryCode: any = undefined;
	let countyCode: any = undefined;
	let offset: any = undefined;

	if (params.length > 0) {
		if (isParameterObject(params[0])) {
			({ countryCode, countyCode, offset } =
				params[0] as PublicHolidayIsTodayPublicHolidayQueryParameters);
			options = params[1];
			axiosConfig = params[2];
		} else {
			[countryCode, countyCode, offset, options, axiosConfig] = params;
		}
	}

	const metaContext = useContext(QueryMetaContext);
	options = addMetaToOptions(options, metaContext);

	return useQuery<void, TError, TSelectData>({
		queryFn: axiosConfig
			? (context) =>
					__publicHolidayIsTodayPublicHoliday(context, axiosConfig)
			: __publicHolidayIsTodayPublicHoliday,
		queryKey: publicHolidayIsTodayPublicHolidayQueryKey(
			countryCode,
			countyCode,
			offset,
		),
		...(publicHolidayIsTodayPublicHolidayDefaultOptions as unknown as Omit<
			UseQueryOptions<void, TError, TSelectData>,
			'queryKey'
		>),
		...options,
	});
}
/**
 * Is today a public holiday
 * @param countryCode The Country Code
 * @param countyCode (optional) Federal State Code
 * @param offset (optional) utc timezone offset
 * @return Today is a public holiday
 */
export function setPublicHolidayIsTodayPublicHolidayData(
	queryClient: QueryClient,
	updater: (data: void | undefined) => void,
	countryCode: string,
	countyCode: string | undefined,
	offset: number | undefined,
) {
	queryClient.setQueryData(
		publicHolidayIsTodayPublicHolidayQueryKey(
			countryCode,
			countyCode,
			offset,
		),
		updater,
	);
}

/**
 * Is today a public holiday
 * @param countryCode The Country Code
 * @param countyCode (optional) Federal State Code
 * @param offset (optional) utc timezone offset
 * @return Today is a public holiday
 */
export function setPublicHolidayIsTodayPublicHolidayDataByQueryId(
	queryClient: QueryClient,
	queryKey: QueryKey,
	updater: (data: void | undefined) => void,
) {
	queryClient.setQueryData(queryKey, updater);
}

export function publicHolidayNextPublicHolidaysUrl(
	countryCode: string,
): string {
	let url_ = getBaseUrl() + '/api/v3/NextPublicHolidays/{countryCode}';
	if (countryCode === undefined || countryCode === null)
		throw new Error("The parameter 'countryCode' must be defined.");
	url_ = url_.replace('{countryCode}', encodeURIComponent('' + countryCode));
	url_ = url_.replace(/[?&]$/, '');
	return url_;
}

let publicHolidayNextPublicHolidaysDefaultOptions: Omit<
	UseQueryOptions<
		Types.PublicHolidayV3Dto[],
		unknown,
		Types.PublicHolidayV3Dto[]
	>,
	'queryKey' | 'queryFn'
> &
	Partial<
		Pick<
			UseQueryOptions<
				Types.PublicHolidayV3Dto[],
				unknown,
				Types.PublicHolidayV3Dto[]
			>,
			'queryFn'
		>
	> = {};
export function getPublicHolidayNextPublicHolidaysDefaultOptions() {
	return publicHolidayNextPublicHolidaysDefaultOptions;
}
export function setPublicHolidayNextPublicHolidaysDefaultOptions(
	options: typeof publicHolidayNextPublicHolidaysDefaultOptions,
) {
	publicHolidayNextPublicHolidaysDefaultOptions = options;
}

export function publicHolidayNextPublicHolidaysQueryKey(
	countryCode: string,
): QueryKey;
export function publicHolidayNextPublicHolidaysQueryKey(
	...params: any[]
): QueryKey {
	if (params.length === 1 && isParameterObject(params[0])) {
		const { countryCode } =
			params[0] as PublicHolidayNextPublicHolidaysQueryParameters;

		return trimArrayEnd([
			'Client',
			'publicHolidayNextPublicHolidays',
			countryCode as any,
		]);
	} else {
		return trimArrayEnd([
			'Client',
			'publicHolidayNextPublicHolidays',
			...params,
		]);
	}
}
export function __publicHolidayNextPublicHolidays(
	context: QueryFunctionContext,
	axiosConfig?: AxiosRequestConfig | undefined,
) {
	return Client().publicHolidayNextPublicHolidays(
		context.queryKey[2] as string,
	);
}

export function usePublicHolidayNextPublicHolidaysQuery<
	TSelectData = Types.PublicHolidayV3Dto[],
	TError = unknown,
>(
	dto: PublicHolidayNextPublicHolidaysQueryParameters,
	options?: Omit<
		UseQueryOptions<Types.PublicHolidayV3Dto[], TError, TSelectData>,
		'queryKey'
	>,
	axiosConfig?: Partial<AxiosRequestConfig>,
): UseQueryResult<TSelectData, TError>;
/**
 * Returns the upcoming public holidays for the next 365 days for the given country
 * @return OK
 */
export function usePublicHolidayNextPublicHolidaysQuery<
	TSelectData = Types.PublicHolidayV3Dto[],
	TError = unknown,
>(
	countryCode: string,
	options?: Omit<
		UseQueryOptions<Types.PublicHolidayV3Dto[], TError, TSelectData>,
		'queryKey'
	>,
	axiosConfig?: Partial<AxiosRequestConfig>,
): UseQueryResult<TSelectData, TError>;
export function usePublicHolidayNextPublicHolidaysQuery<
	TSelectData = Types.PublicHolidayV3Dto[],
	TError = unknown,
>(...params: any[]): UseQueryResult<TSelectData, TError> {
	let options:
		| UseQueryOptions<Types.PublicHolidayV3Dto[], TError, TSelectData>
		| undefined = undefined;
	let axiosConfig: AxiosRequestConfig | undefined = undefined;
	let countryCode: any = undefined;

	if (params.length > 0) {
		if (isParameterObject(params[0])) {
			({ countryCode } =
				params[0] as PublicHolidayNextPublicHolidaysQueryParameters);
			options = params[1];
			axiosConfig = params[2];
		} else {
			[countryCode, options, axiosConfig] = params;
		}
	}

	const metaContext = useContext(QueryMetaContext);
	options = addMetaToOptions(options, metaContext);

	return useQuery<Types.PublicHolidayV3Dto[], TError, TSelectData>({
		queryFn: axiosConfig
			? (context) =>
					__publicHolidayNextPublicHolidays(context, axiosConfig)
			: __publicHolidayNextPublicHolidays,
		queryKey: publicHolidayNextPublicHolidaysQueryKey(countryCode),
		...(publicHolidayNextPublicHolidaysDefaultOptions as unknown as Omit<
			UseQueryOptions<Types.PublicHolidayV3Dto[], TError, TSelectData>,
			'queryKey'
		>),
		...options,
	});
}
/**
 * Returns the upcoming public holidays for the next 365 days for the given country
 * @return OK
 */
export function setPublicHolidayNextPublicHolidaysData(
	queryClient: QueryClient,
	updater: (
		data: Types.PublicHolidayV3Dto[] | undefined,
	) => Types.PublicHolidayV3Dto[],
	countryCode: string,
) {
	queryClient.setQueryData(
		publicHolidayNextPublicHolidaysQueryKey(countryCode),
		updater,
	);
}

/**
 * Returns the upcoming public holidays for the next 365 days for the given country
 * @return OK
 */
export function setPublicHolidayNextPublicHolidaysDataByQueryId(
	queryClient: QueryClient,
	queryKey: QueryKey,
	updater: (
		data: Types.PublicHolidayV3Dto[] | undefined,
	) => Types.PublicHolidayV3Dto[],
) {
	queryClient.setQueryData(queryKey, updater);
}

export function publicHolidayNextPublicHolidaysWorldwideUrl(): string {
	let url_ = getBaseUrl() + '/api/v3/NextPublicHolidaysWorldwide';
	url_ = url_.replace(/[?&]$/, '');
	return url_;
}

let publicHolidayNextPublicHolidaysWorldwideDefaultOptions: Omit<
	UseQueryOptions<
		Types.PublicHolidayV3Dto[],
		unknown,
		Types.PublicHolidayV3Dto[]
	>,
	'queryKey' | 'queryFn'
> &
	Partial<
		Pick<
			UseQueryOptions<
				Types.PublicHolidayV3Dto[],
				unknown,
				Types.PublicHolidayV3Dto[]
			>,
			'queryFn'
		>
	> = {};
export function getPublicHolidayNextPublicHolidaysWorldwideDefaultOptions() {
	return publicHolidayNextPublicHolidaysWorldwideDefaultOptions;
}
export function setPublicHolidayNextPublicHolidaysWorldwideDefaultOptions(
	options: typeof publicHolidayNextPublicHolidaysWorldwideDefaultOptions,
) {
	publicHolidayNextPublicHolidaysWorldwideDefaultOptions = options;
}

export function publicHolidayNextPublicHolidaysWorldwideQueryKey(): QueryKey;
export function publicHolidayNextPublicHolidaysWorldwideQueryKey(
	...params: any[]
): QueryKey {
	return trimArrayEnd(['Client', 'publicHolidayNextPublicHolidaysWorldwide']);
}
export function __publicHolidayNextPublicHolidaysWorldwide(
	context: QueryFunctionContext,
	axiosConfig?: AxiosRequestConfig | undefined,
) {
	return Client().publicHolidayNextPublicHolidaysWorldwide();
}

/**
 * Returns the upcoming public holidays for the next 7 days
 * @return OK
 */
export function usePublicHolidayNextPublicHolidaysWorldwideQuery<
	TSelectData = Types.PublicHolidayV3Dto[],
	TError = unknown,
>(
	options?: Omit<
		UseQueryOptions<Types.PublicHolidayV3Dto[], TError, TSelectData>,
		'queryKey'
	>,
	axiosConfig?: Partial<AxiosRequestConfig>,
): UseQueryResult<TSelectData, TError>;
export function usePublicHolidayNextPublicHolidaysWorldwideQuery<
	TSelectData = Types.PublicHolidayV3Dto[],
	TError = unknown,
>(...params: any[]): UseQueryResult<TSelectData, TError> {
	let options:
		| UseQueryOptions<Types.PublicHolidayV3Dto[], TError, TSelectData>
		| undefined = undefined;
	let axiosConfig: AxiosRequestConfig | undefined = undefined;

	options = params[0] as any;
	axiosConfig = params[1] as any;

	const metaContext = useContext(QueryMetaContext);
	options = addMetaToOptions(options, metaContext);

	return useQuery<Types.PublicHolidayV3Dto[], TError, TSelectData>({
		queryFn: axiosConfig
			? (context) =>
					__publicHolidayNextPublicHolidaysWorldwide(
						context,
						axiosConfig,
					)
			: __publicHolidayNextPublicHolidaysWorldwide,
		queryKey: publicHolidayNextPublicHolidaysWorldwideQueryKey(),
		...(publicHolidayNextPublicHolidaysWorldwideDefaultOptions as unknown as Omit<
			UseQueryOptions<Types.PublicHolidayV3Dto[], TError, TSelectData>,
			'queryKey'
		>),
		...options,
	});
}
/**
 * Returns the upcoming public holidays for the next 7 days
 * @return OK
 */
export function setPublicHolidayNextPublicHolidaysWorldwideData(
	queryClient: QueryClient,
	updater: (
		data: Types.PublicHolidayV3Dto[] | undefined,
	) => Types.PublicHolidayV3Dto[],
) {
	queryClient.setQueryData(
		publicHolidayNextPublicHolidaysWorldwideQueryKey(),
		updater,
	);
}

/**
 * Returns the upcoming public holidays for the next 7 days
 * @return OK
 */
export function setPublicHolidayNextPublicHolidaysWorldwideDataByQueryId(
	queryClient: QueryClient,
	queryKey: QueryKey,
	updater: (
		data: Types.PublicHolidayV3Dto[] | undefined,
	) => Types.PublicHolidayV3Dto[],
) {
	queryClient.setQueryData(queryKey, updater);
}

export function versionGetVersionUrl(): string {
	let url_ = getBaseUrl() + '/api/v3/Version';
	url_ = url_.replace(/[?&]$/, '');
	return url_;
}

let versionGetVersionDefaultOptions: Omit<
	UseQueryOptions<Types.VersionInfoDto, unknown, Types.VersionInfoDto>,
	'queryKey' | 'queryFn'
> &
	Partial<
		Pick<
			UseQueryOptions<
				Types.VersionInfoDto,
				unknown,
				Types.VersionInfoDto
			>,
			'queryFn'
		>
	> = {};
export function getVersionGetVersionDefaultOptions() {
	return versionGetVersionDefaultOptions;
}
export function setVersionGetVersionDefaultOptions(
	options: typeof versionGetVersionDefaultOptions,
) {
	versionGetVersionDefaultOptions = options;
}

export function versionGetVersionQueryKey(): QueryKey;
export function versionGetVersionQueryKey(...params: any[]): QueryKey {
	return trimArrayEnd(['Client', 'versionGetVersion']);
}
export function __versionGetVersion(
	context: QueryFunctionContext,
	axiosConfig?: AxiosRequestConfig | undefined,
) {
	return Client().versionGetVersion();
}

/**
 * Get the version of the used Nager.Date library
 * @return OK
 */
export function useVersionGetVersionQuery<
	TSelectData = Types.VersionInfoDto,
	TError = unknown,
>(
	options?: Omit<
		UseQueryOptions<Types.VersionInfoDto, TError, TSelectData>,
		'queryKey'
	>,
	axiosConfig?: Partial<AxiosRequestConfig>,
): UseQueryResult<TSelectData, TError>;
export function useVersionGetVersionQuery<
	TSelectData = Types.VersionInfoDto,
	TError = unknown,
>(...params: any[]): UseQueryResult<TSelectData, TError> {
	let options:
		| UseQueryOptions<Types.VersionInfoDto, TError, TSelectData>
		| undefined = undefined;
	let axiosConfig: AxiosRequestConfig | undefined = undefined;

	options = params[0] as any;
	axiosConfig = params[1] as any;

	const metaContext = useContext(QueryMetaContext);
	options = addMetaToOptions(options, metaContext);

	return useQuery<Types.VersionInfoDto, TError, TSelectData>({
		queryFn: axiosConfig
			? (context) => __versionGetVersion(context, axiosConfig)
			: __versionGetVersion,
		queryKey: versionGetVersionQueryKey(),
		...(versionGetVersionDefaultOptions as unknown as Omit<
			UseQueryOptions<Types.VersionInfoDto, TError, TSelectData>,
			'queryKey'
		>),
		...options,
	});
}
/**
 * Get the version of the used Nager.Date library
 * @return OK
 */
export function setVersionGetVersionData(
	queryClient: QueryClient,
	updater: (data: Types.VersionInfoDto | undefined) => Types.VersionInfoDto,
) {
	queryClient.setQueryData(versionGetVersionQueryKey(), updater);
}

/**
 * Get the version of the used Nager.Date library
 * @return OK
 */
export function setVersionGetVersionDataByQueryId(
	queryClient: QueryClient,
	queryKey: QueryKey,
	updater: (data: Types.VersionInfoDto | undefined) => Types.VersionInfoDto,
) {
	queryClient.setQueryData(queryKey, updater);
}
