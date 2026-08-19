import React from 'react';
import type { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  onInquire: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onInquire }) => {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between space-y-4">
      <div>
        <h3 className="text-base font-bold text-slate-900">
          {service.title}
        </h3>

        <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
          {service.description}
        </p>

        <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
          {service.features.map((feat, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 inline-block" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-2">
        <button
          onClick={() => onInquire(service)}
          className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline inline-flex items-center gap-1"
        >
          Discuss Service &rarr;
        </button>
      </div>
    </div>
  );
};
