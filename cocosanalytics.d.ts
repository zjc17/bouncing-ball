
declare namespace cocosAnalytics {
	function init(info: {
		appID: string,
		version: string,
		storeID: string,
		engine: string,
	}): void;

	function enableDebug(enabled: boolean): void;

	namespace CAAccount {
		function loginStart(info: {
			channel: string
		}): void;
		function loginSuccess(info: {
			userID: string,
			age: number,
			sex: number,
			channel: string,
		}): void;
		function loginFailed(info: {
			reason: string,
		}): void;
		function logout(): void;
	}

	namespace CAPayment {
		function payBegin(info: {
			amount: number,
			orderID: string,
			payType: string,
			iapID: string,
			currencyType: string,
			virtualCurrencyAmount: number,
			accountID: string,
			partner: string,
			gameServer: string,
			level: number,
			mission: string,
		}): void;
		function paySuccess(info: {
			amount: number,
			orderID: string,
			payType: string,
			iapID: string,
			currencyType: string,
			virtualCurrencyAmount: number,
			accountID: string,
			partner: string,
			gameServer: string,
			level: number,
			mission: string,
		}): void;
		function payFailed(info: {
			amount: number,
			orderID: string,
			payType: string,
			iapID: string,
			currencyType: string,
			virtualCurrencyAmount: number,
			accountID: string,
			partner: string,
			gameServer: string,
			level: number,
			mission: string,
			reason: string,
		}): void;
		function payCanceled(info: {
			amount: number,
			orderID: string,
			payType: string,
			iapID: string,
			currencyType: string,
			virtualCurrencyAmount: number,
			accountID: string,
			partner: string,
			gameServer: string,
			level: number,
			mission: string,
		}): void;
	}

	namespace CACustomEvent {
		function onStarted(name: string, info: {
			name: string
		} | any): void;
		function onSuccess(name: string, info: {
			name: string
		} | any): void;
		function onCancelled(name: string, info: {
			name: string
		} | any): void;
		function onFailed(name: string, info: {
			name: string
		} | any, result: string): void;
	}
}
