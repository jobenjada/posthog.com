import React from 'react'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid'

const features = [
    { key: 'eventCapture', name: 'Event Capture' },
    { key: 'userIdentification', name: 'User Identification' },
    { key: 'autoCapture', name: 'Auto Capture' },
    { key: 'sessionRecording', name: 'Session Recordings' },
    { key: 'featureFlags', name: 'Feature Flags' },
] as const

export type LibraryFeaturesProps = {
    availability?: Record<typeof features[number]['key'], boolean>
}

export const LibraryFeatures = ({ availability }: LibraryFeaturesProps) => {
    return availability ? (
        <div className="bg-gray-accent-light dark:bg-gray-accent-dark px-6 py-4 space-y-2 my-4 rounded">
            <h6 className="text-gray !my-0 text-sm">What features are available?</h6>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0 gap-2">
                {features.map((feature) => (
                    <li key={feature.key} className="flex items-center space-x-1">
                        {availability[feature.key] ? (
                            <CheckCircleIcon className="text-green w-3 h-3" />
                        ) : (
                            <XCircleIcon className="text-red w-3 h-3" />
                        )}
                        <span className="text-xs">{feature.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    ) : null
}

export default LibraryFeatures