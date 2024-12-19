'use client'

import Image from "next/image"
import { useState, ChangeEvent } from "react"
import * as z from "zod"

export default function Claim() {
    const contractValueSchema = z.number().positive().int().min(0)
    const claimValueSchema = z.number().positive().int().min(0)

    const [contractValue, setContractValue] = useState<number | null>(null)
    const [claimValue, setClaimValue] = useState<number | null>(null)
    const [currency, setCurrency] = useState<"USD" | "INR">("USD")
    const [contractValueError, setContractValueError] = useState<string | undefined>()
    const [claimValueError, setClaimValueError] = useState<string | undefined>()

    const claimpercentage = contractValue && claimValue ? (claimValue / contractValue) * 100 : 0

    const handleCurrencyChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        setCurrency(e.target.value as "USD" | "INR")
    }

    const convertToINR = (value: number | null): number | null => {
        if (!value) return null
        return currency === 'INR' ? value * 74.5 : value
    }

    const handleContractValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = parseFloat(e.target.value)
        if (isNaN(value) || /^\d+(\.\d+)?$/.test(e.target.value)) {
            try {
                contractValueSchema.parse(value)
                setContractValue(value)
                setContractValueError(undefined)
            } catch (err) {
                if (err instanceof Error) {
                    setContractValueError(err.message)
                }
            }
        } else {
            setContractValueError('Please enter a number')
        }
    }

    const handleClaimValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = parseFloat(e.target.value)
        if (isNaN(value) || /^\d+(\.\d+)?$/.test(e.target.value)) {
            try {
                claimValueSchema.parse(value)
                setClaimValue(value)
                setClaimValueError(undefined)
            } catch (err) {
                if (err instanceof Error) {
                    setClaimValueError(err.message)
                }
            }
        } else {
            setClaimValueError('Please enter a number')
        }
    }

    return (
        <div className="ml-16 pb-6">
            <div className="flex flex-row gap-x-3 items-center py-4">
                <Image src="/claim.svg" width={40} height={40} alt="Claim" />
                <h1 className="text-xl font-bold text-neutral-600">Claim Value</h1>
            </div>
            <div className="ml-14">
                <div className="flex flex-col gap-2">
                    <label htmlFor="contract-value">Contract Value</label>
                    <div className="flex flex-row">
                        <input
                            type="text"
                            id="contract-value"
                            value={convertToINR(contractValue) ?? ''}
                            onChange={handleContractValueChange}
                            className="w-60 px-4 bg-neutral-100 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <select value={currency} onChange={handleCurrencyChange} className="bg-white m-2">
                            <option value="USD">USD</option>
                            <option value="INR">INR</option>
                        </select>
                    </div>
                    {contractValueError && (
                        <p className="text-red-500 mt-2">Please enter a number</p>
                    )}
                    <label htmlFor="claim-value">Claim Value</label>
                    <div className="flex flex-row">
                        <input
                            type="text"
                            id="claim-value"
                            value={convertToINR(claimValue) ?? ''}
                            onChange={handleClaimValueChange}
                            className="w-60 px-4 bg-neutral-100 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none [-moz-appearance:textfield]"
                        />
                        <select value={currency} onChange={handleCurrencyChange} className="bg-white m-2">
                            <option value="USD">USD</option>
                            <option value="INR">INR</option>
                        </select>
                    </div>
                    {claimValueError && (
                        <p className="text-red-500 mt-2">Please enter a number</p>
                    )}

                    {contractValue && claimValue && (
                        <div className="text-yellow-500 text-sm">
                            {claimpercentage.toFixed(2)}% of Contract Value
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
