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
          Google APIs
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
          Firebase
        </text>
      </g>
      <g>
        <rect
          x="20"
          y="80"
          width="360"
          height="30"
          rx="4"
          className="fill-teal-500/20 stroke-teal-500"
          strokeWidth="1"
        />
        <text
          x="200"
          y="100"
          textAnchor="middle"
          className="fill-gray-400 text-[12px]"
        >
          Backend
        </text>
      </g>
      <g>
        <rect
          x="20"
          y="170"
          width="160"
          height="40"
          rx="4"
          className="fill-purple-500/20 stroke-purple-500"
          strokeWidth="1"
        />
        <text
          x="100"
          y="195"
          textAnchor="middle"
          className="fill-gray-400 text-[12px] font-bold"
        >
          RunRun Ecommerce
        </text>
      </g>
      <g>
        <rect
          x="200"
          y="170"
          width="160"
          height="40"
          rx="4"
          className="fill-purple-500/20 stroke-purple-500"
          strokeWidth="1"
        />
        <text
          x="280"
          y="195"
          textAnchor="middle"
          className="fill-gray-400 text-[12px] font-bold"
        >
          Agent App
        </text>
      </g>
      <g>
        <rect
          x="20"
          y="265"
          width="160"
          height="30"
          rx="4"
          className="fill-yellow-500/20 stroke-yellow-500"
          strokeWidth="1"
        />
        <text
          x="100"
          y="285"
          textAnchor="middle"
          className="fill-gray-400 text-[12px]"
        >
          Users
        </text>
      </g>
      <g>
        <rect
          x="200"
          y="265"
          width="160"
          height="30"
          rx="4"
          className="fill-orange-500/20 stroke-orange-500"
          strokeWidth="1"
        />
        <text
          x="280"
          y="285"
          textAnchor="middle"
          className="fill-gray-400 text-[12px]"
        >
          Riders
        </text>
      </g>
      <g className="stroke-gray-600" strokeWidth="1">
        <line x1="50" y1="60" x2="50" y2="80" /> 
        <line x1="145" y1="60" x2="145" y2="80" />
        <line x1="235" y1="60" x2="235" y2="80" />
        <line x1="340" y1="60" x2="340" y2="80" />
        <line x1="105" y1="110" x2="105" y2="170" />
        <line x1="105" y1="210" x2="105" y2="265" />
        <line x1="280" y1="110" x2="280" y2="170" />
        <line x1="280" y1="210" x2="280" y2="265" />
      </g>
    </svg>
  );
}
