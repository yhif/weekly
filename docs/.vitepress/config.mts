import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "阮一峰博客周刊归档",
  description: "阮一峰博客周刊归档，由 VitePress 驱动，DocSearch X Algolia 全文检索驱动",

  sitemap: {
      hostname: 'https://weekly.genaiprism.site'
  },

  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-EP0Z5X8E75' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-EP0Z5X8E75');`
    ]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '周刊归档', link: '/archive.md' }
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: '906HPV4HX0',
        apiKey: '00b839bd8061afc004237baa2cd3ba39',
        indexName: 'weekly',
        debug: false
      }
    },

    sidebar: [
      {
        text: '2024年五月',
        items: [
          { text: '周刊第 302 期', link: '/issue-302.md' },
          { text: '周刊第 301 期', link: '/issue-301.md' },
          { text: '周刊第 300 期', link: '/issue-300.md' },
          { text: '周刊第 299 期', link: '/issue-299.md' },
        ]
      },

      {
        text: '2024年四月',
        items: [
          { text: '周刊第 298 期', link: '/issue-298.md' },
          { text: '周刊第 297 期', link: '/issue-297.md' },
          { text: '周刊第 296 期', link: '/issue-296.md' },
        ]
      },
      {
        text: '2024年三月',
        items: [
          { text: '周刊第 295 期', link: '/issue-295.md' },
          { text: '周刊第 294 期', link: '/issue-294.md' },
          { text: '周刊第 293 期', link: '/issue-293.md' },
          { text: '周刊第 292 期', link: '/issue-292.md' },
          { text: '周刊第 291 期', link: '/issue-291.md' },
        ]
      },

      {
        text: '2024年二月',
        items: [
          { text: '周刊第 290 期', link: '/issue-290.md' },
          { text: '周刊第 289 期', link: '/issue-289.md' },
        ]
      },

      {
        text: '2024年一月',
        items: [
          { text: '周刊第 288 期', link: '/issue-288.md' },
          { text: '周刊第 287 期', link: '/issue-287.md' },
          { text: '周刊第 286 期', link: '/issue-286.md' },
          { text: '周刊第 285 期', link: '/issue-285.md' },
        ]
      },

      {
        text: '2023年十二月',
        items: [
          { text: '周刊第 284 期', link: '/issue-284.md' },
          { text: '周刊第 283 期', link: '/issue-283.md' },
          { text: '周刊第 282 期', link: '/issue-282.md' },
          { text: '周刊第 281 期', link: '/issue-281.md' },
          { text: '周刊第 280 期', link: '/issue-280.md' },
        ]
      },

      {
        text: '2023年十一月',
        items: [
          { text: '周刊第 279 期', link: '/issue-279.md' },
          { text: '周刊第 278 期', link: '/issue-278.md' },
          { text: '周刊第 277 期', link: '/issue-277.md' },
          { text: '周刊第 276 期', link: '/issue-276.md' },
        ]
      },

      {
        text: '2023年十月',
        items: [
          { text: '周刊第 275 期', link: '/issue-275.md' },
          { text: '周刊第 274 期', link: '/issue-274.md' },
          { text: '周刊第 273 期', link: '/issue-273.md' },
        ]
      },

      {
        text: '2023年九月',
        items: [
          { text: '周刊第 272 期', link: '/issue-272.md' },
          { text: '周刊第 271 期', link: '/issue-271.md' },
          { text: '周刊第 270 期', link: '/issue-270.md' },
          { text: '周刊第 269 期', link: '/issue-269.md' },
        ]
      },

      {
        text: '2023年八月',
        items: [
          { text: '周刊第 268 期', link: '/issue-268.md' },
          { text: '周刊第 267 期', link: '/issue-267.md' },
          { text: '周刊第 266 期', link: '/issue-266.md' },
          { text: '周刊第 265 期', link: '/issue-265.md' },
        ]
      },

      {
        text: '2023年七月',
        items: [
          { text: '周刊第 264 期', link: '/issue-264.md' },
          { text: '周刊第 263 期', link: '/issue-263.md' },
          { text: '周刊第 262 期', link: '/issue-262.md' },
          { text: '周刊第 261 期', link: '/issue-261.md' },
        ]
      },

      {
        text: '2023年六月',
        items: [
          { text: '周刊第 260 期', link: '/issue-260.md' },
          { text: '周刊第 259 期', link: '/issue-259.md' },
          { text: '周刊第 258 期', link: '/issue-258.md' },
          { text: '周刊第 257 期', link: '/issue-257.md' },
        ]
      },

      {
        text: '2023年五月',
        items: [
          { text: '周刊第 256 期', link: '/issue-256.md' },
          { text: '周刊第 255 期', link: '/issue-255.md' },
          { text: '周刊第 254 期', link: '/issue-254.md' },
          { text: '周刊第 253 期', link: '/issue-253.md' },
        ]
      },

      {
        text: '2023年四月',
        items: [
          { text: '周刊第 252 期', link: '/issue-252.md' },
          { text: '周刊第 251 期', link: '/issue-251.md' },
          { text: '周刊第 250 期', link: '/issue-250.md' },
          { text: '周刊第 249 期', link: '/issue-249.md' },
        ]
      },

      {
        text: '2023年三月',
        items: [
          { text: '周刊第 248 期', link: '/issue-248.md' },
          { text: '周刊第 247 期', link: '/issue-247.md' },
          { text: '周刊第 246 期', link: '/issue-246.md' },
          { text: '周刊第 245 期', link: '/issue-245.md' },
          { text: '周刊第 244 期', link: '/issue-244.md' },
        ]
      },

      {
        text: '2023年二月',
        items: [
          { text: '周刊第 243 期', link: '/issue-243.md' },
          { text: '周刊第 242 期', link: '/issue-242.md' },
          { text: '周刊第 241 期', link: '/issue-241.md' },
          { text: '周刊第 240 期', link: '/issue-240.md' },
        ]
      },

      {
        text: '2023年一月',
        items: [
          { text: '周刊第 239 期', link: '/issue-239.md' },
          { text: '周刊第 238 期', link: '/issue-238.md' },
        ]
      },

      {
        text: '2022年十二月',
        items: [
          { text: '周刊第 237 期', link: '/issue-237.md' },
          { text: '周刊第 236 期', link: '/issue-236.md' },
          { text: '周刊第 235 期', link: '/issue-235.md' },
          { text: '周刊第 234 期', link: '/issue-234.md' },
          { text: '周刊第 233 期', link: '/issue-233.md' },
        ]
      },

      {
        text: '2022年十一月',
        items: [
          { text: '周刊第 232 期', link: '/issue-232.md' },
          { text: '周刊第 231 期', link: '/issue-231.md' },
          { text: '周刊第 230 期', link: '/issue-230.md' },
          { text: '周刊第 229 期', link: '/issue-229.md' },
        ]
      },

      {
        text: '2022年十月',
        items: [
          { text: '周刊第 228 期', link: '/issue-228.md' },
          { text: '周刊第 227 期', link: '/issue-227.md' },
          { text: '周刊第 226 期', link: '/issue-226.md' },
        ]
      },
      
      {
        text: '2022年九月',
        items: [
          { text: '周刊第 225 期', link: '/issue-225.md' },
          { text: '周刊第 224 期', link: '/issue-224.md' },
          { text: '周刊第 223 期', link: '/issue-223.md' },
          { text: '周刊第 222 期', link: '/issue-222.md' },
          { text: '周刊第 221 期', link: '/issue-221.md' },
        ]
      },

      {
        text: '2022年八月',
        items: [
          { text: '周刊第 220 期', link: '/issue-220.md' },
          { text: '周刊第 219 期', link: '/issue-219.md' },
          { text: '周刊第 218 期', link: '/issue-218.md' },
          { text: '周刊第 217 期', link: '/issue-217.md' },
        ]
      },

      {
        text: '2022年七月',
        items: [
          { text: '周刊第 216 期', link: '/issue-216.md' },
          { text: '周刊第 215 期', link: '/issue-215.md' },
          { text: '周刊第 214 期', link: '/issue-214.md' },
          { text: '周刊第 213 期', link: '/issue-213.md' },
          { text: '周刊第 212 期', link: '/issue-212.md' },
        ]
      },

      {
        text: '2022年六月',
        items: [
          { text: '周刊第 211 期', link: '/issue-211.md' },
          { text: '周刊第 210 期', link: '/issue-210.md' },
          { text: '周刊第 209 期', link: '/issue-209.md' },
        ]
      },

      {
        text: '2022年五月',
        items: [
          { text: '周刊第 208 期', link: '/issue-208.md' },
          { text: '周刊第 207 期', link: '/issue-207.md' },
          { text: '周刊第 206 期', link: '/issue-206.md' },
          { text: '周刊第 205 期', link: '/issue-205.md' },
        ]
      },

      {
        text: '2022年四月',
        items: [
          { text: '周刊第 204 期', link: '/issue-204.md' },
          { text: '周刊第 203 期', link: '/issue-203.md' },
          { text: '周刊第 202 期', link: '/issue-202.md' },
          { text: '周刊第 201 期', link: '/issue-201.md' },
        ]
      },

      {
        text: '2022年三月',
        items: [
          { text: '周刊第 200 期', link: '/issue-200.md' },
          { text: '周刊第 199 期', link: '/issue-199.md' },
          { text: '周刊第 198 期', link: '/issue-198.md' },
          { text: '周刊第 197 期', link: '/issue-197.md' },
        ]
      },

      {
        text: '2022年二月',
        items: [
          { text: '周刊第 196 期', link: '/issue-196.md' },
          { text: '周刊第 195 期', link: '/issue-195.md' },
          { text: '周刊第 194 期', link: '/issue-194.md' },
        ]
      },

      {
        text: '2022年一月',
        items: [
          { text: '周刊第 193 期', link: '/issue-193.md' },
          { text: '周刊第 192 期', link: '/issue-192.md' },
          { text: '周刊第 191 期', link: '/issue-191.md' },
        ]
      },

      {
        text: '2021年十二月',
        items: [
          { text: '周刊第 190 期', link: '/issue-190.md' },
          { text: '周刊第 189 期', link: '/issue-189.md' },
          { text: '周刊第 188 期', link: '/issue-188.md' },
          { text: '周刊第 187 期', link: '/issue-187.md' },
          { text: '周刊第 186 期', link: '/issue-186.md' },
        ]
      },

      {
        text: '2021年十一月',
        items: [
          { text: '周刊第 185 期', link: '/issue-185.md' },
          { text: '周刊第 184 期', link: '/issue-184.md' },
          { text: '周刊第 183 期', link: '/issue-183.md' },
          { text: '周刊第 182 期', link: '/issue-182.md' },
        ]
      },

      {
        text: '2021年十月',
        items: [
          { text: '周刊第 181 期', link: '/issue-181.md' },
          { text: '周刊第 180 期', link: '/issue-180.md' },
          { text: '周刊第 179 期', link: '/issue-179.md' },
          { text: '周刊第 178 期', link: '/issue-178.md' },
        ]
      },
      
      {
        text: '2021年九月',
        items: [
          { text: '周刊第 177 期', link: '/issue-177.md' },
          { text: '周刊第 176 期', link: '/issue-176.md' },
          { text: '周刊第 175 期', link: '/issue-175.md' },
          { text: '周刊第 174 期', link: '/issue-174.md' },
        ]
      },

      {
        text: '2021年八月',
        items: [
          { text: '周刊第 173 期', link: '/issue-173.md' },
          { text: '周刊第 172 期', link: '/issue-172.md' },
          { text: '周刊第 171 期', link: '/issue-171.md' },
          { text: '周刊第 170 期', link: '/issue-170.md' },
        ]
      },

      {
        text: '2021年七月',
        items: [
          { text: '周刊第 169 期', link: '/issue-169.md' },
          { text: '周刊第 168 期', link: '/issue-168.md' },
          { text: '周刊第 167 期', link: '/issue-167.md' },
          { text: '周刊第 166 期', link: '/issue-166.md' },
          { text: '周刊第 165 期', link: '/issue-165.md' },
        ]
      },

      {
        text: '2021年六月',
        items: [
          { text: '周刊第 164 期', link: '/issue-164.md' },
          { text: '周刊第 163 期', link: '/issue-163.md' },
          { text: '周刊第 162 期', link: '/issue-162.md' },
          { text: '周刊第 161 期', link: '/issue-161.md' },
        ]
      },

      {
        text: '2021年五月',
        items: [
          { text: '周刊第 160 期', link: '/issue-160.md' },
          { text: '周刊第 159 期', link: '/issue-159.md' },
          { text: '周刊第 158 期', link: '/issue-158.md' },
          { text: '周刊第 157 期', link: '/issue-157.md' },
        ]
      },

      {
        text: '2021年四月',
        items: [
          { text: '周刊第 156 期', link: '/issue-156.md' },
          { text: '周刊第 155 期', link: '/issue-155.md' },
          { text: '周刊第 154 期', link: '/issue-154.md' },
          { text: '周刊第 153 期', link: '/issue-153.md' },
          { text: '周刊第 152 期', link: '/issue-152.md' },
        ]
      },

      {
        text: '2021年三月',
        items: [
          { text: '周刊第 151 期', link: '/issue-151.md' },
          { text: '周刊第 150 期', link: '/issue-150.md' },
          { text: '周刊第 149 期', link: '/issue-149.md' },
          { text: '周刊第 148 期', link: '/issue-148.md' },
        ]
      },

      {
        text: '2021年二月',
        items: [
          { text: '周刊第 147 期', link: '/issue-147.md' },
          { text: '周刊第 146 期', link: '/issue-146.md' },
          { text: '周刊第 145 期', link: '/issue-145.md' },
        ]
      },

      {
        text: '2021年一月',
        items: [
          { text: '周刊第 144 期', link: '/issue-144.md' },
          { text: '周刊第 143 期', link: '/issue-143.md' },
          { text: '周刊第 142 期', link: '/issue-142.md' },
          { text: '周刊第 141 期', link: '/issue-141.md' },
        ]
      },

      {
        text: '2020年十二月',
        items: [
          { text: '周刊第 140 期', link: '/issue-140.md' },
          { text: '周刊第 139 期', link: '/issue-139.md' },
          { text: '周刊第 138 期', link: '/issue-138.md' },
          { text: '周刊第 137 期', link: '/issue-137.md' },
          { text: '周刊第 136 期', link: '/issue-136.md' },
        ]
      },

      {
        text: '2020年十一月',
        items: [
          { text: '周刊第 135 期', link: '/issue-135.md' },
          { text: '周刊第 134 期', link: '/issue-134.md' },
          { text: '周刊第 133 期', link: '/issue-133.md' },
          { text: '周刊第 132 期', link: '/issue-132.md' },
        ]
      },

      {
        text: '2020年十月',
        items: [
          { text: '周刊第 131 期', link: '/issue-131.md' },
          { text: '周刊第 130 期', link: '/issue-130.md' },
          { text: '周刊第 129 期', link: '/issue-129.md' },
          { text: '周刊第 128 期', link: '/issue-128.md' },
        ]
      },
      
      {
        text: '2020年九月',
        items: [
          { text: '周刊第 127 期', link: '/issue-127.md' },
          { text: '周刊第 126 期', link: '/issue-126.md' },
          { text: '周刊第 125 期', link: '/issue-125.md' },
          { text: '周刊第 124 期', link: '/issue-124.md' },
          { text: '周刊第 123 期', link: '/issue-123.md' },
        ]
      },

      {
        text: '2020年八月',
        items: [
          { text: '周刊第 122 期', link: '/issue-122.md' },
          { text: '周刊第 121 期', link: '/issue-121.md' },
          { text: '周刊第 120 期', link: '/issue-120.md' },
          { text: '周刊第 119 期', link: '/issue-119.md' },
        ]
      },

      {
        text: '2020年七月',
        items: [
          { text: '周刊第 118 期', link: '/issue-118.md' },
          { text: '周刊第 117 期', link: '/issue-117.md' },
          { text: '周刊第 116 期', link: '/issue-116.md' },
          { text: '周刊第 115 期', link: '/issue-115.md' },
          { text: '周刊第 114 期', link: '/issue-114.md' },
        ]
      },

      {
        text: '2020年六月',
        items: [
          { text: '周刊第 113 期', link: '/issue-113.md' },
          { text: '周刊第 112 期', link: '/issue-112.md' },
          { text: '周刊第 111 期', link: '/issue-111.md' },
          { text: '周刊第 110 期', link: '/issue-110.md' },
        ]
      },

      {
        text: '2020年五月',
        items: [
          { text: '周刊第 109 期', link: '/issue-109.md' },
          { text: '周刊第 108 期', link: '/issue-108.md' },
          { text: '周刊第 107 期', link: '/issue-107.md' },
          { text: '周刊第 106 期', link: '/issue-106.md' },
        ]
      },

      {
        text: '2020年四月',
        items: [
          { text: '周刊第 105 期', link: '/issue-105.md' },
          { text: '周刊第 104 期', link: '/issue-104.md' },
          { text: '周刊第 103 期', link: '/issue-103.md' },
          { text: '周刊第 102 期', link: '/issue-102.md' },
          { text: '周刊第 101 期', link: '/issue-101.md' },
        ]
      },

      {
        text: '2020年三月',
        items: [
          { text: '周刊第 100 期', link: '/issue-100.md' },
          { text: '周刊第 99 期', link: '/issue-99.md' },
          { text: '周刊第 98 期', link: '/issue-98.md' },
          { text: '周刊第 97 期', link: '/issue-97.md' },
        ]
      },

      {
        text: '2020年二月',
        items: [
          { text: '周刊第 96 期', link: '/issue-96.md' },
          { text: '周刊第 95 期', link: '/issue-95.md' },
          { text: '周刊第 94 期', link: '/issue-94.md' },
          { text: '周刊第 93 期', link: '/issue-93.md' },
        ]
      },

      {
        text: '2020年一月',
        items: [
          { text: '周刊第 92 期', link: '/issue-92.md' },
          { text: '周刊第 91 期', link: '/issue-91.md' },
          { text: '周刊第 90 期', link: '/issue-90.md' },
          { text: '周刊第 89 期', link: '/issue-89.md' },
        ]
      },

      {
        text: '2019年十二月',
        items: [
          { text: '周刊第 88 期', link: '/issue-88.md' },
          { text: '周刊第 87 期', link: '/issue-87.md' },
          { text: '周刊第 86 期', link: '/issue-86.md' },
          { text: '周刊第 85 期', link: '/issue-85.md' },
        ]
      },

      {
        text: '2019年十一月',
        items: [
          { text: '周刊第 84 期', link: '/issue-84.md' },
          { text: '周刊第 83 期', link: '/issue-83.md' },
          { text: '周刊第 82 期', link: '/issue-82.md' },
          { text: '周刊第 81 期', link: '/issue-81.md' },
          { text: '周刊第 80 期', link: '/issue-80.md' },
        ]
      },

      {
        text: '2019年十月',
        items: [
          { text: '周刊第 79 期', link: '/issue-79.md' },
          { text: '周刊第 78 期', link: '/issue-78.md' },
          { text: '周刊第 77 期', link: '/issue-77.md' },
          { text: '周刊第 76 期', link: '/issue-76.md' },
        ]
      },
      
      {
        text: '2019年九月',
        items: [
          { text: '周刊第 75 期', link: '/issue-75.md' },
          { text: '周刊第 74 期', link: '/issue-74.md' },
          { text: '周刊第 73 期', link: '/issue-73.md' },
          { text: '周刊第 72 期', link: '/issue-72.md' },
        ]
      },

      {
        text: '2019年八月',
        items: [
          { text: '周刊第 71 期', link: '/issue-71.md' },
          { text: '周刊第 70 期', link: '/issue-70.md' },
          { text: '周刊第 69 期', link: '/issue-69.md' },
          { text: '周刊第 68 期', link: '/issue-68.md' },
          { text: '周刊第 67 期', link: '/issue-67.md' },
        ]
      },

      {
        text: '2019年七月',
        items: [
          { text: '周刊第 66 期', link: '/issue-66.md' },
          { text: '周刊第 65 期', link: '/issue-65.md' },
          { text: '周刊第 64 期', link: '/issue-64.md' },
          { text: '周刊第 63 期', link: '/issue-63.md' },
        ]
      },

      {
        text: '2019年六月',
        items: [
          { text: '周刊第 62 期', link: '/issue-62.md' },
          { text: '周刊第 61 期', link: '/issue-61.md' },
          { text: '周刊第 60 期', link: '/issue-60.md' },
          { text: '周刊第 59 期', link: '/issue-59.md' },
        ]
      },

      {
        text: '2019年五月',
        items: [
          { text: '周刊第 58 期', link: '/issue-58.md' },
          { text: '周刊第 57 期', link: '/issue-57.md' },
          { text: '周刊第 56 期', link: '/issue-56.md' },
          { text: '周刊第 55 期', link: '/issue-55.md' },
          { text: '周刊第 54 期', link: '/issue-54.md' },
        ]
      },

      {
        text: '2019年四月',
        items: [
          { text: '周刊第 53 期', link: '/issue-53.md' },
          { text: '周刊第 52 期', link: '/issue-52.md' },
          { text: '周刊第 51 期', link: '/issue-51.md' },
          { text: '周刊第 50 期', link: '/issue-50.md' },
        ]
      },

      {
        text: '2019年三月',
        items: [
          { text: '周刊第 49 期', link: '/issue-49.md' },
          { text: '周刊第 48 期', link: '/issue-48.md' },
          { text: '周刊第 47 期', link: '/issue-47.md' },
          { text: '周刊第 46 期', link: '/issue-46.md' },
          { text: '周刊第 45 期', link: '/issue-45.md' },
        ]
      },

      {
        text: '2019年二月',
        items: [
          { text: '周刊第 44 期', link: '/issue-44.md' },
          { text: '周刊第 43 期', link: '/issue-43.md' },
          { text: '周刊第 42 期', link: '/issue-42.md' },
        ]
      },

      {
        text: '2019年一月',
        items: [
          { text: '周刊第 41 期', link: '/issue-41.md' },
          { text: '周刊第 40 期', link: '/issue-40.md' },
          { text: '周刊第 39 期', link: '/issue-39.md' },
          { text: '周刊第 38 期', link: '/issue-38.md' },
        ]
      },

      {
        text: '2018年十二月',
        items: [
          { text: '周刊第 37 期', link: '/issue-37.md' },
          { text: '周刊第 36 期', link: '/issue-36.md' },
          { text: '周刊第 35 期', link: '/issue-35.md' },
          { text: '周刊第 34 期', link: '/issue-34.md' },
        ]
      },

      {
        text: '2018年十一月',
        items: [
          { text: '周刊第 33 期', link: '/issue-33.md' },
          { text: '周刊第 32 期', link: '/issue-32.md' },
          { text: '周刊第 31 期', link: '/issue-31.md' },
          { text: '周刊第 30 期', link: '/issue-30.md' },
          { text: '周刊第 29 期', link: '/issue-29.md' },
        ]
      },

      {
        text: '2018年十月',
        items: [
          { text: '周刊第 28 期', link: '/issue-28.md' },
          { text: '周刊第 27 期', link: '/issue-27.md' },
          { text: '周刊第 26 期', link: '/issue-26.md' },
          { text: '周刊第 25 期', link: '/issue-25.md' },
        ]
      },
      
      {
        text: '2018年九月',
        items: [
          { text: '周刊第 24 期', link: '/issue-24.md' },
          { text: '周刊第 23 期', link: '/issue-23.md' },
          { text: '周刊第 22 期', link: '/issue-22.md' },
          { text: '周刊第 21 期', link: '/issue-21.md' },
        ]
      },

      {
        text: '2018年八月',
        items: [
          { text: '周刊第 20 期', link: '/issue-20.md' },
          { text: '周刊第 19 期', link: '/issue-19.md' },
          { text: '周刊第 18 期', link: '/issue-18.md' },
          { text: '周刊第 17 期', link: '/issue-17.md' },
          { text: '周刊第 16 期', link: '/issue-16.md' },
        ]
      },

      {
        text: '2018年七月',
        items: [
          { text: '周刊第 15 期', link: '/issue-15.md' },
          { text: '周刊第 14 期', link: '/issue-14.md' },
          { text: '周刊第 13 期', link: '/issue-13.md' },
          { text: '周刊第 12 期', link: '/issue-12.md' },
        ]
      },

      {
        text: '2018年六月',
        items: [
          { text: '周刊第 11 期', link: '/issue-11.md' },
          { text: '周刊第 10 期', link: '/issue-10.md' },
          { text: '周刊第 9 期', link: '/issue-9.md' },
          { text: '周刊第 8 期', link: '/issue-8.md' },
          { text: '周刊第 7 期', link: '/issue-7.md' },
        ]
      },

      {
        text: '2018年五月',
        items: [
          { text: '周刊第 6 期', link: '/issue-6.md' },
          { text: '周刊第 5 期', link: '/issue-5.md' },
          { text: '周刊第 4 期', link: '/issue-4.md' },
          { text: '周刊第 3 期', link: '/issue-3.md' },
        ]
      },

      {
        text: '2018年四月',
        items: [
          { text: '周刊第 2 期', link: '/issue-2.md' },
          { text: '周刊第 1 期', link: '/issue-1.md' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yhif/weekly' }
    ]
  }
})
