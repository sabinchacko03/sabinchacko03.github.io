export default function RunRunArchitecture() {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 300">
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
          SQL DB
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
          REDIS
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
      <g>
        <rect
          x="20"
          y="80"
          width="360"
          height="40"
          rx="4"
          className="fill-purple-500/20 stroke-purple-500"
          strokeWidth="1"
        />
        <text
          x="200"
          y="105"
          textAnchor="middle"
          className="fill-gray-400 text-[12px] font-bold"
        >
          RunRun Ecommerce
        </text>
      </g>
      <g>
        <rect
          x="50"
          y="140"
          width="100"
          height="40"
          rx="4"
          className="fill-purple-500/20 stroke-purple-500"
          strokeWidth="1"
        />
        <text
          x="105"
          y="165"
          textAnchor="middle"
          className="fill-gray-400 text-[12px]"
        >
          Salesforce
        </text>
      </g>
      <g>
        <rect
          x="175"
          y="200"
          width="50"
          height="40"
          rx="4"
          className="fill-blue-500/20 stroke-blue-500"
          strokeWidth="1"
        />
        <text
          x="200"
          y="225"
          textAnchor="middle"
          className="fill-gray-400 text-[12px]"
        >
          SSO
        </text>
      </g>
      <g>
        <rect
          x="20"
          y="265"
          width="360"
          height="30"
          rx="4"
          className="fill-teal-500/20 stroke-teal-500"
          strokeWidth="1"
        />
        <text
          x="200"
          y="285"
          textAnchor="middle"
          className="fill-gray-400 text-[12px]"
        >
          Users
        </text>
      </g>
      <g className="stroke-gray-600" strokeWidth="1">
        <line x1="50" y1="60" x2="50" y2="80" />
        <line x1="145" y1="60" x2="145" y2="80" />
        <line x1="235" y1="60" x2="235" y2="80" />
        <line x1="340" y1="60" x2="340" y2="80" />
        <line x1="105" y1="120" x2="105" y2="140" />
        <line x1="105" y1="180" x2="105" y2="265" />
        <line x1="200" y1="120" x2="200" y2="200" />
        <line x1="200" y1="240" x2="200" y2="265" />
      </g>
    </svg>
  );
}
