-- 在Navicat中执行以下语句，然后将查询结果复制到 app/sysdata/sys_world_city.json 中;

SELECT concat("{\n", GROUP_CONCAT(concat("  \"", CityID, "\": ", ResData) separator ",\n"), "\n}") FROM `sys_world_city` where ResData!="";