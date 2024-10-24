-- 在Navicat中执行以下语句，然后将查询结果复制到 app/sysdata/sys_world_res.json 中;

SELECT concat("{\n", GROUP_CONCAT(concat("  \"", WorldResID, "\": ", LevelList) separator ",\n"), "\n}") FROM `sys_world_res`;