export default function SimplifiArchitecture() {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 360">
      <defs>
        <marker
          id="arrowHead"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 Z" className="fill-gray-400" />
        </marker>
      </defs>

      {/* Top row: external systems */}
      <g>
        <rect
          x="20"
          y="20"
          width="70"
          height="40"
          rx="4"
          className="fill-blue-500/20 stroke-blue-500"
          strokeWidth="1"
        />
        <text
          x="55"
          y="45"
          textAnchor="middle"
          className="fill-gray-400 text-[12px]"
        >
          SAP
        </text>
      </g>
      <g>
        <rect
          x="110"
          y="20"
          width="70"
          height="40"
          rx="4"
          className="fill-blue-500/20 stroke-blue-500"
          strokeWidth="1"
        />
        <text
          x="145"
          y="45"
          textAnchor="middle"
          className="fill-gray-400 text-[12px]"
        >
          Salesforce
        </text>
      </g>
      <g>
        <rect
          x="200"
          y="20"
          width="70"
          height="40"
          rx="4"
          className="fill-blue-500/20 stroke-blue-500"
          strokeWidth="1"
        />
        <text
          x="235"
          y="45"
          textAnchor="middle"
          className="fill-gray-400 text-[12px]"
        >
          Pathlock
        </text>
      </g>
      <g>
        <rect
          x="290"
          y="20"
          width="90"
          height="40"
          rx="4"
          className="fill-blue-500/20 stroke-blue-500"
          strokeWidth="1"
        />
        <text
          x="335"
          y="45"
          textAnchor="middle"
          className="fill-gray-400 text-[12px]"
        >
          SAP HANADB
        </text>
      </g>

      {/* NestJS Gateway: PO/SO/PR automation hop between SAP and Simplifi */}
      <g>
        <rect
          x="20"
          y="78"
          width="70"
          height="34"
          rx="4"
          className="fill-amber-500/20 stroke-amber-500"
          strokeWidth="1"
        />
        <text
          x="55"
          y="92"
          textAnchor="middle"
          className="fill-gray-300 text-[10px] font-bold"
        >
          Gateway
        </text>
        <text
          x="55"
          y="104"
          textAnchor="middle"
          className="fill-gray-500 text-[8px]"
        >
          (NestJS)
        </text>
      </g>

      {/* Request/status-update arrows: SAP <-> Gateway <-> Simplifi */}
      <g strokeWidth="1.5">
        <line
          x1="40"
          y1="60"
          x2="40"
          y2="78"
          className="stroke-amber-500"
          markerEnd="url(#arrowHead)"
        />
        <line
          x1="70"
          y1="78"
          x2="70"
          y2="60"
          className="stroke-gray-500"
          strokeDasharray="3 3"
          markerEnd="url(#arrowHead)"
        />
        <line
          x1="40"
          y1="112"
          x2="40"
          y2="130"
          className="stroke-amber-500"
          markerEnd="url(#arrowHead)"
        />
        <line
          x1="70"
          y1="130"
          x2="70"
          y2="112"
          className="stroke-gray-500"
          strokeDasharray="3 3"
          markerEnd="url(#arrowHead)"
        />
      </g>
      <text x="94" y="90" className="fill-amber-500 text-[8px]">
        PO/SO/PR request
      </text>
      <text x="94" y="102" className="fill-gray-500 text-[8px]">
        Status update
      </text>

      {/* Internal Workflow Engine (Simplifi) */}
      <g>
        <rect
          x="20"
          y="130"
          width="360"
          height="40"
          rx="4"
          className="fill-purple-500/20 stroke-purple-500"
          strokeWidth="1"
        />
        <text
          x="200"
          y="155"
          textAnchor="middle"
          className="fill-gray-400 text-[12px] font-bold"
        >
          Internal Workflow Engine
        </text>
      </g>
      <g>
        <rect
          x="50"
          y="190"
          width="100"
          height="40"
          rx="4"
          className="fill-purple-500/20 stroke-purple-500"
          strokeWidth="1"
        />
        <text
          x="105"
          y="215"
          textAnchor="middle"
          className="fill-gray-400 text-[12px]"
        >
          Salesforce
        </text>
      </g>
      <g>
        <rect
          x="175"
          y="250"
          width="50"
          height="40"
          rx="4"
          className="fill-blue-500/20 stroke-blue-500"
          strokeWidth="1"
        />
        <text
          x="200"
          y="275"
          textAnchor="middle"
          className="fill-gray-400 text-[12px]"
        >
          SSO
        </text>
      </g>
      <g>
        <rect
          x="20"
          y="310"
          width="360"
          height="30"
          rx="4"
          className="fill-teal-500/20 stroke-teal-500"
          strokeWidth="1"
        />
        <text
          x="200"
          y="330"
          textAnchor="middle"
          className="fill-gray-400 text-[12px]"
        >
          Users
        </text>
      </g>
      <g className="stroke-gray-600" strokeWidth="1">
        <line x1="145" y1="60" x2="145" y2="130" />
        <line x1="235" y1="60" x2="235" y2="130" />
        <line x1="340" y1="60" x2="340" y2="130" />
        <line x1="105" y1="170" x2="105" y2="190" />
        <line x1="105" y1="230" x2="105" y2="310" />
        <line x1="200" y1="170" x2="200" y2="250" />
        <line x1="200" y1="290" x2="200" y2="310" />
      </g>
    </svg>
  );
}
